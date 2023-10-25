const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors"); // Import the cors module
const oilRoutes = require("./route");

const app = express();
app.use(cors()); // Enable CORS for your Express app

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
    console.error("Error connecting to MongoDB:", error);
    process.exit(1);
  }
}

connect();

app.use("/oils", oilRoutes);

app.listen(8000, () => {
  console.log("Server started on port 8000!!");
});
