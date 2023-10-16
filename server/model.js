const {ObjectId} = require("mongodb");
const mongoose = require("mongoose");

const oilSchema = new mongoose.Schema({
  _id: {
    type: ObjectId,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  productName: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  packageSizes: {
    type: [String],
    required: true,
  },
  featuresAndBenefits: {
    type: [String],
    required: true,
  },
  applications: {
    type: [String],
    required: true,
  },
  certsAndApps: {
    type: [String],
    required: true,
  },
  pdfUrl: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  specs: {
    type: Object,
    required: true,
  },
});

const Oils = mongoose.model("oils", oilSchema);

module.exports = Oils;
