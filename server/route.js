const express = require("express");
const Oils = require("./model");

const router = express.Router();

router.get("/", async (req, res) => {
  try {

    const oils = await Oils.find();
    res.send(oils);
  } catch (error) {
    console.error("Error retrieving oils:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
})

module.exports = router;
