const express = require("express");
const router = require("./routes/router");
const userRouter = require("./routes/userRouter");
const app = express();

const PORT = 4000;

app.use(express.json());
app.use("/router", router);
app.use("/user", userRouter);

app.listen(PORT, () => {
  console.clear();
  console.log(`server running on ${PORT}`);
});
