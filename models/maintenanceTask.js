import mongoose from "mongoose";

const maintenanceTaskSchema = new mongoose.Schema ({
    assetId: { type: mongoose.Schema.Types.ObjectId, ref: "Asset" },
    taskName: { type: String, required: true },
    taskDescription: { type: String, required: true },
    scheduledDate: { type: Date, default: new Date() },
    completionDate: { type: Date, default: new Date() },
    technicianId: { type: mongoose.Schema.Types.ObjectId, ref: "Technician" },
    status: { type: String, required: true }
})

export default mongoose.model("MaintenanceTask", maintenanceTaskSchema);