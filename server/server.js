const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const cookieParser = require("cookie-parser");
const cors = require("cors");
require("./dbConnection");
const router = require("./routes/router");
const userRouter = require("./routes/userRouter");
const errorHandler = require("./utils/errorHandler");
const cartRouter = require("./routes/cartRouter");
const stripeRouter = require("./routes/stripeRouter");
const app = express();

const PORT = 4000;
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

app.use(errorHandler);

app.listen(PORT, () => {
  console.clear();
  console.log(`server running on ${PORT}`);
});
