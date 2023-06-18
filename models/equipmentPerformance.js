import mongoose from "mongoose";

const equipmentPerformanceSchema = new Schema ({
    assetId: { type: mongoose.Schema.Types.ObjectId, ref: "Asset" },
    performanceDate: { type: Date, default: new Date() },
    parameters: [ { parameter: String, value: String }],
    buildingName: { type: String, required: true },
    floorNumber: { type: Number, required: true }
});

export default mongoose.model("EquipmentPerformance", equipmentPerformanceSchema);