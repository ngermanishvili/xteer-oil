const express = require("express");
const serverless = require("serverless-http");
const mongoose = require("mongoose");
const cors = require("cors");
const oilRoutes = require("./route");

const app = express();
app.use(cors());
const PORT = process.env.PORT || 8000;


const uri =
  "mongodb+srv://samxara:samxara@cluster0.j0xk7o2.mongodb.net/GentoTrading?retryWrites=true&w=majority";


const connect = async () => {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to Mo ngoDB:", error);
    process.exit(1);
  }
};

connect();

app.use("/oils", oilRoutes);
module.exports.handler = serverless(app);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}!!`);
});