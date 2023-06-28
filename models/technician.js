const mongoose = require("mongoose");

const technicianSchema = new mongoose.Schema({
  technicianName: { type: String, required: true },
  technicianEmail: { type: String, required: true },
  technicianPhone: { type: String, required: true },
});

module.exports = mongoose.model("Technician", technicianSchema);
