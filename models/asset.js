const mongoose = require("mongoose");

const assetSchema = new mongoose.Schema ({
    assetName: { type: String, required: true },
    assetType: { type: String, required: true },
    assetId: { type: String, required: true },
    locationId: { type: mongoose.Schema.Types.ObjectId, ref: "Location" },
    assetDescription: { type: String, required: true },
    purchaseDate: { type: Date, default: new Date() },
    manufacturer: { type: String, required: true },
    serialNumber: { type: String, required: true },
    warrantyExpirationDate: { type: Date, default: new Date() },
    maintenanceInterval: { type: String, required: true },
    lastMaintenanceDate: { type: String, required: true },
    nextMaintenanceDate: { type: String, required: true },
    status: { type: String, required: true }
})

module.exports = mongoose.model("Asset", assetSchema); 