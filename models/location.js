import mongoose from "mongoose";

const locationSchema = new Schema ({
    buildingName: { type: String, required: true },
    floorNumber: { type: Number, required: true }
});

export default mongoose.model("Location", locationSchema);