const express = require("express");
const authController = require("../controllers/authController");
const Stripe = require("stripe");
const { route } = require("./router");
const UserModel = require("../controllers/UserModel");
const { responseCreator } = require("../utils/responseCreator");
const stripeRouter = express.Router();

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

stripeRouter.get("/", (req, res) => {
  res.send("In stripe router");
});

stripeRouter.post(
  "/create-checkout-session",
  authController,
  async (req, res, next) => {
    try {
      const { cart } = res.locals.userdata;

      const lineItems = cart.items.map((product) => ({
        price_data: {
          currency: "inr",
          product_data: {
            name: product.title,
            images: [product.image],
          },
          unit_amount: Math.round(product.price * 100), // price in paise
        },
        quantity: product.quantity,
      }));

      //   cart-> initiateCheckout (response recd here)=>navigated to success page

      const session = await stripe.checkout.sessions.create({
        success_url: "https://amazecart-ji1i.onrender.com/user/checkout/success",
        cancel_url: "https://amazecart-ji1i.onrender.com/cancel",
        line_items: lineItems,
        mode: "payment",
      });

      res.cookie("session_id", session.id, {
        maxAge: 3600_000,
        httpOnly: true,
      });
      res.send({ session, id: session.id });
    } catch (error) {
      next(error);
    }
  }
);

stripeRouter.get("/checkout-session", authController, async (req, res, next) => {
  const sessionId = req.cookies.session_id;
  const { username, cart } = res.locals.userdata;
  const session = await stripe.checkout.sessions.retrieve(sessionId);
  const order = {
    stripeSessionId: sessionId,
    username,
    amount: cart.totalPrice,
    currency: session.currency,
    paymentStatus: session.paymentStatus,
    items: cart.items,
    totalQuantity:cart.totalQuantity,
  };

  await UserModel.updateOrders(username, order);

  res.send(responseCreator("Order created successfully", order));
});

module.exports = stripeRouter;
