const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");

const oilSchema = new mongoose.Schema({
  _id: {
    type: ObjectId,
    required: false,
  },
  category: {
    type: String,
    required: false,
  },
  type: {
    type: String,
    required: false,
  },
  productName: {
    type: String,
    required: false,
  },
  description: {
    type: String,
    required: false,
  },
  packageSizes: {
    type: [String],
    required: false,
  },
  featuresAndBenefits: {
    type: [String],
    required: false,
  },
  applications: {
    type: [String],
    required: false,
  },
  certsAndApps: {
    type: [String],
    required: false,
  },
  pdfUrl: {
    type: String,
    required: false,
  },
  imageUrl: {
    type: String,
    required: false,
  },
  specs: {
    type: Object,
    required: false,
  },
});

const Oils = mongoose.model("oils", oilSchema);

module.exports = Oils;
