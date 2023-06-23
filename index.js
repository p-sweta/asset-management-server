const express = require("express");
const app = express();
const cors = require("cors");
const { insertData, clearData } = require("./controllers/seedData");

require("dotenv").config();
const PORT = process.env.PORT || 8000;

const assetRoutes = require("./routes/asset-routes");
const equipmentPerformanceRoutes = require("./routes/equipmentPerformance-routes");
const locationRoutes = require("./routes/location-routes");
const maintenanceTaskRoutes = require("./routes/maintenanceTask-routes");
const technicianRoutes = require("./routes/technician-routes");
const userRoutes = require("./routes/user-routes");

app.use(express.json());
app.use(cors());

app.use("/assets", assetRoutes);
app.use("/equipment-performances", equipmentPerformanceRoutes);
app.use("/locations", locationRoutes);
app.use("/maintenance-tasks", maintenanceTaskRoutes);
app.use("/technicians", technicianRoutes);
app.use("/users", userRoutes);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true });
    console.log("Connected to the database!");

    // await clearData();
    // await insertData();

    await app.listen(PORT, () => {
      console.log(`Running on port ${PORT}`);
    });
  } catch (err) {
    console.log(err);
  }
};

connectDB();
 