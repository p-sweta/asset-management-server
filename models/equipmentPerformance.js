const mongoose = require("mongoose");

const equipmentPerformanceSchema = new mongoose.Schema ({
    assetId: { type: mongoose.Schema.Types.ObjectId, ref: "Asset" },
    performanceDate: { type: Date, default: new Date() },
    parameters: [ { parameter: String, value: String }],
    buildingName: { type: String, required: true },
    floorNumber: { type: Number, required: true }
});

module.exports = mongoose.model("EquipmentPerformance", equipmentPerformanceSchema);