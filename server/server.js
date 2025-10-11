const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const cookieParser = require("cookie-parser");
const cors = require("cors");
const path = require("path");
require("./dbConnection");
const router = require("./routes/router");
const userRouter = require("./routes/userRouter");
const errorHandler = require("./utils/errorHandler");
const cartRouter = require("./routes/cartRouter");
const stripeRouter = require("./routes/stripeRouter");
const productRouter = require("./routes/productsRouter");
// const sendEmail = require("./utils/mailUtil");
const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());
app.use("/router", router);
app.use("/user", userRouter);
app.use("/cart", cartRouter);
app.use("/stripe", stripeRouter);
app.use("/products", productRouter);

app.use("/", express.static(path.join(__dirname, "dist")));

app.get("*/splat", (req, res) => {
  res.sendFile(path.join(__dirname, "dist/index.html"));
});

app.use(errorHandler);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.clear();
  console.log(`server running on ${PORT}`);
});
