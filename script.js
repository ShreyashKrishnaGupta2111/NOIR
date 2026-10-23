
require("dotenv").config();

const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors({ origin: process.env.FRONTEND_URL }));
app.use(express.json());

const PORT = process.env.PORT || 3000;

const PAYPAL_BASE =
  process.env.PAYPAL_MODE === "live"
    ? "https://api-m.paypal.com"
    : "https://api-m.sandbox.paypal.com";

// Replace these sample items with your exact menu and prices.
const MENU = {
  "truffle-pasta": { name: "Truffle Pasta", price: 14.99 },
  "classic-burger": { name: "Classic Burger", price: 11.99 },
  "margherita-pizza": { name: "Margherita Pizza", price: 12.99 }
};

async function getAccessToken() {
  const credentials = Buffer.from(
    `${process.env.PAYPAL_CLIENT_ID}:${process.env.PAYPAL_CLIENT_SECRET}`
  ).toString("base64");

  const response = await fetch(`${PAYPAL_BASE}/v1/oauth2/token`, {
    method: "POST",
    headers: {
      Authorization: `Basic ${credentials}`,
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: "grant_type=client_credentials"
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error("Unable to authenticate with PayPal");
  }

  return data.access_token;
}

function calculateTotal(items) {
  if (!Array.isArray(items) || items.length === 0) {
    throw new Error("Your cart is empty");
  }

  let total = 0;

  for (const item of items) {
    const product = MENU[item.id];
    const quantity = Number(item.quantity);

    if (
      !product ||
      !Number.isInteger(quantity) ||
      quantity < 1 ||
      quantity > 50
    ) {
      throw new Error("Invalid cart item");
    }

    total += product.price * quantity;
  }

  return total.toFixed(2);
}

app.post("/api/create-order", async (req, res) => {
  try {
    const total = calculateTotal(req.body.items);
    const token = await getAccessToken();

    const response = await fetch(`${PAYPAL_BASE}/v2/checkout/orders`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        intent: "CAPTURE",
        purchase_units: [{
          amount: {
            currency_code: "USD",
            value: total
          },
          description: "NOIR Restaurant Order"
        }]
      })
    });

    const data = await response.json();

    if (!response.ok) {
      return res.status(502).json({
        error: "PayPal could not create the order"
      });
    }

    res.json({ id: data.id });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.post("/api/capture-order", async (req, res) => {
  try {
    const { orderID } = req.body;

    if (!orderID || typeof orderID !== "string") {
      return res.status(400).json({ error: "Invalid order ID" });
    }

    const token = await getAccessToken();

    const response = await fetch(
      `${PAYPAL_BASE}/v2/checkout/orders/${encodeURIComponent(orderID)}/capture`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json"
        }
      }
    );

    const data = await response.json();

    if (!response.ok || data.status !== "COMPLETED") {
      return res.status(400).json({
        error: "Payment was not completed"
      });
    }

    // In production, verify the captured amount and currency,
    // prevent duplicate order processing, and save the order
    // to a database before marking it paid.

    res.json({
      success: true,
      orderID: data.id,
      status: data.status
    });
  } catch (error) {
    console.error("Payment processing failed:", error);
    res.status(500).json({ error: "Payment processing failed" });
  }
});

app.listen(PORT, () => {
  console.log(`Payment server running on port ${PORT}`);
});
