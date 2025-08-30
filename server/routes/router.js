const express = require("express");
const router = express.Router();


router.get("/", (req, res) => {
  res.send("req handled by router.js");
});

router.get("/login", (req, res) => {
  res.send({ message: "login via token" });
});

router.get("/login", (req, res) => {
  res.send({ message: "login via cookie" });
});

router.post("/login", (req, res) => {
  res.send({ message: "login via credentials" });
});

router.all('/*splat',(req,res)=>{
    res.status(404);
    res.send('Invalid route!!!')
});

module.exports = router;
