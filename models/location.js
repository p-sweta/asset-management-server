const mongoose = require("mongoose");

const locationSchema = new mongoose.Schema({
  buildingName: { type: String, required: true },
  floorNumber: { type: Number, required: true },
});

module.exports = mongoose.model("Location", locationSchema);
