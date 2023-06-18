import mongoose from "mongoose";

const technicianSchema = new Schema ({
    technicianName: { type: String, required: true },
    technicianEmail: { type: String, required: true },
    technicianPassword: { type: String, required: true }
});

export default mongoose.model("Technician", technicianSchema);