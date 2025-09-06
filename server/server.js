const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
require("./dbConnection");
const router = require("./routes/router");
const userRouter = require("./routes/userRouter");
const errorHandler = require("./utils/errorHandler");
const cartRouter = require("./routes/cartRouter");
const app = express();

const PORT = 4000;

app.use(express.json());
app.use("/router", router);
app.use("/user", userRouter);
app.use("/cart", cartRouter);

app.use(errorHandler);

app.listen(PORT, () => {
  console.clear();
  console.log(`server running on ${PORT}`);
});
