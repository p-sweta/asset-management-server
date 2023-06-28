const mongoose = require("mongoose");
const Location = require("../models/location");
const Asset = require("../models/asset");
const EquipmentPerformance = require("../models/equipmentPerformance");
const MaintenanceTask = require("../models/maintenanceTask");
const Technician = require("../models/technician");
const User = require("../models/user");

const ObjectId = mongoose.Types.ObjectId;

const insertLocationData = [
  {
    _id: new ObjectId(),
    buildingName: "Main Building",
    floorNumber: 1,
  },
  {
    _id: new ObjectId(),
    buildingName: "Filter House",
    floorNumber: 2,
  },
  {
    _id: new ObjectId(),
    buildingName: "Main Building",
    floorNumber: 2
  },
  {
    _id: new ObjectId(),
    buildingName: "Administration Building",
    floorNumber: 3
  },
  {
    _id: new ObjectId(),
    buildingName: "Pump Station 1",
    floorNumber: 1
  },
  {
    _id: new ObjectId(),
    buildingName: "Chemical Storage Building",
    floorNumber: 1
  },
  {
    _id: new ObjectId(),
    buildingName: "Control Room",
    floorNumber: 1
  },
  {
    _id: new ObjectId(),
    buildingName: "Laboratory",
    floorNumber: 1
  },
  {
    _id: new ObjectId(),
    buildingName: "Maintenance Workshop",
    floorNumber: 2
  },
  {
    _id: new ObjectId(),
    buildingName: "Storage Warehouse",
    floorNumber: 1
  },
  {
    _id: new ObjectId(),
    buildingName: "Building 6",
    floorNumber: 1
  },
  {
    _id: new ObjectId(),
    buildingName: "Main Clarifiers",
    floorNumber: 1
  }
];

const insertAssetData = [
  {
    _id: new ObjectId(),
    assetName: "Pump A",
    assetType: "Pump",
    assetId: "P-23",
    locationId: insertLocationData[4]._id,
    assetDescription: "Main water pump",
    purchaseDate: new Date("2022-01-15T00:00:00Z"),
    manufacturer: "ABC Corporation",
    serialNumber: "123456",
    warrantyExpirationDate: new Date("2024-01-15T00:00:00Z"),
    maintenanceInterval: "6 months",
    lastMaintenanceDate: new Date("2023-05-15T00:00:00Z"),
    nextMaintenanceDate: new Date("2023-11-15T00:00:00Z"),
    status: "Active",
  },
  {
    _id: new ObjectId(),
    assetName: "Filter Unit",
    assetType: "Filter",
    assetId: "F-12",
    locationId: insertLocationData[1]._id,
    assetDescription: "Water filtration unit",
    purchaseDate: new Date("2021-05-20T00:00:00Z"),
    manufacturer: "XYZ Corporation",
    serialNumber: "789012",
    warrantyExpirationDate: new Date("2023-05-20T00:00:00Z"),
    maintenanceInterval: "3 months",
    lastMaintenanceDate: new Date("2023-02-20T00:00:00Z"),
    nextMaintenanceDate: new Date("2023-05-20T00:00:00Z"),
    status: "Active",
  },
  {
    _id: new ObjectId(),
    assetName: "Pump",
    assetType: "Water Pump",
    assetId: "P-24",
    locationId: insertLocationData[4]._id,
    assetDescription: "Centrifugal pump for water supply",
    purchaseDate: new Date("2022-01-15T00:00:00Z"),
    manufacturer: "Grundfos",
    serialNumber: "PUMP001",
    warrantyExpirationDate: new Date("2023-01-15T00:00:00Z"),
    maintenanceInterval: "Monthly",
    lastMaintenanceDate: new Date("2022-06-01T00:00:00Z"),
    nextMaintenanceDate: new Date("2022-07-01T00:00:00Z"),
    status: "Active"
  },
  {
    _id: new ObjectId(),
    assetName: "Filter System B",
    assetType: "Water Filter",
    assetId: "F-13",
    locationId: insertLocationData[1]._id,
    assetDescription: "Multi-media filter for water treatment",
    purchaseDate: new Date("2022-02-20T00:00:00Z"),
    manufacturer: "Evoqua",
    serialNumber: "FILTER002",
    warrantyExpirationDate: new Date("2023-02-20T00:00:00Z"),
    maintenanceInterval: "Quarterly",
    lastMaintenanceDate: new Date("2022-05-01T00:00:00Z"),
    nextMaintenanceDate: new Date("2022-08-01T00:00:00Z"),
    status: "Active"
  },
  {
    _id: new ObjectId(),
    assetName: "Chemical Dosing System C",
    assetType: "Chemical Feeder",
    assetId: "CF-6",
    locationId: insertLocationData[10]._id,
    assetDescription: "Automatic chemical dosing system for water treatment",
    purchaseDate: new Date("2022-03-10T00:00:00Z"),
    manufacturer: "Prominent",
    serialNumber: "DOSE003",
    warrantyExpirationDate: new Date("2023-03-10T00:00:00Z"),
    maintenanceInterval: "Monthly",
    lastMaintenanceDate: new Date("2022-06-01T00:00:00Z"),
    nextMaintenanceDate: new Date("2022-07-01T00:00:00Z"),
    status: "Active"
  },
  {
    _id: new ObjectId(),
    assetName: "Clarifier D",
    assetType: "Water Clarifier",
    assetId: "C-4",
    locationId: insertLocationData[11]._id,
    assetDescription: "Sedimentation tank for water treatment",
    purchaseDate: new Date("2022-04-05T00:00:00Z"),
    manufacturer: "Westech",
    serialNumber: "CLARIFIER004",
    warrantyExpirationDate: new Date("2023-04-05T00:00:00Z"),
    maintenanceInterval: "Annually",
    lastMaintenanceDate: new Date("2022-05-01T00:00:00Z"),
    nextMaintenanceDate: new Date("2023-05-01T00:00:00Z"),
    status: "Active"
  },
  {
    _id: new ObjectId(),
    assetName: "UV Disinfection System E",
    assetType: "UV Sterilizer",
    assetId: "UVD-12",
    locationId: insertLocationData[10]._id,
    assetDescription: "Ultraviolet disinfection system for water treatment",
    purchaseDate: new Date("2022-05-12T00:00:00Z"),
    manufacturer: "Trojan Technologies",
    serialNumber: "UVSTERILIZER005",
    warrantyExpirationDate: new Date("2023-05-12T00:00:00Z"),
    maintenanceInterval: "Quarterly",
    lastMaintenanceDate: new Date("2022-07-01T00:00:00Z"),
    nextMaintenanceDate: new Date("2022-10-01T00:00:00Z"),
    status: "Active"
  },
  {
    _id: new ObjectId(),
    assetName: "Ozone Generator F",
    assetType: "Ozone System",
    assetId: "O-2",
    locationId: insertLocationData[10]._id,
    assetDescription: "Ozone generator for water treatment",
    purchaseDate: new Date("2022-06-22T00:00:00Z"),
    manufacturer: "Pacific Ozone",
    serialNumber: "OZONEGEN006",
    warrantyExpirationDate: new Date("2023-06-22T00:00:00Z"),
    maintenanceInterval: "Monthly",
    lastMaintenanceDate: new Date("2022-09-01T00:00:00Z"),
    nextMaintenanceDate: new Date("2022-10-01T00:00:00Z"),
    status: "Active"
  },
  {
    _id: new ObjectId(),
    assetName: "Mixing Tank G",
    assetType: "Water Mixing Tank",
    assetId: "MT-0",
    locationId: insertLocationData[10]._id,
    assetDescription: "Tank for mixing chemicals in water treatment process",
    purchaseDate: new Date("2022-07-18T00:00:00Z"),
    manufacturer: "Chemineer",
    serialNumber: "MIXTANK007",
    warrantyExpirationDate: new Date("2023-07-18T00:00:00Z"),
    maintenanceInterval: "Quarterly",
    lastMaintenanceDate: new Date("2022-10-01T00:00:00Z"),
    nextMaintenanceDate: new Date("2023-01-01T00:00:00Z"),
    status: "Active"
  },
  {
    _id: new ObjectId(),
    assetName: "Reverse Osmosis System H",
    assetType: "Water Purification System",
    assetId: "RO-13",
    locationId: insertLocationData[1]._id,
    assetDescription: "Reverse osmosis system for water purification",
    purchaseDate: new Date("2022-08-30T00:00:00Z"),
    manufacturer: "GE Water",
    serialNumber: "ROSYSTEM008",
    warrantyExpirationDate: new Date("2023-08-30T00:00:00Z"),
    maintenanceInterval: "Annually",
    lastMaintenanceDate: new Date("2022-09-01T00:00:00Z"),
    nextMaintenanceDate: new Date("2023-09-01T00:00:00Z"),
    status: "Active"
  },
  {
    _id: new ObjectId(),
    assetName: "Chemical Storage Tank I",
    assetType: "Chemical Storage",
    assetId: "CS-7",
    locationId: insertLocationData[1]._id,
    assetDescription: "Storage tank for water treatment chemicals",
    purchaseDate: new Date("2022-09-07T00:00:00Z"),
    manufacturer: "Snyder Industries",
    serialNumber: "CHEMTANK009",
    warrantyExpirationDate: new Date("2023-09-07T00:00:00Z"),
    maintenanceInterval: "Monthly",
    lastMaintenanceDate: new Date("2022-10-01T00:00:00Z"),
    nextMaintenanceDate: new Date("2022-11-01T00:00:00Z"),
    status: "Active"
  },
  {
    _id: new ObjectId(),
    assetName: "Sediment Filter J",
    assetType: "Water Filter",
    assetId: "F-14",
    locationId: insertLocationData[1]._id,
    assetDescription: "Filter for removing sediment from water",
    purchaseDate: new Date("2022-10-25T00:00:00Z"),
    manufacturer: "Pentair",
    serialNumber: "FILTER010",
    warrantyExpirationDate: new Date("2023-10-25T00:00:00Z"),
    maintenanceInterval: "Quarterly",
    lastMaintenanceDate: new Date("2023-01-01T00:00:00Z"),
    nextMaintenanceDate: new Date("2023-04-01T00:00:00Z"),
    status: "Active"
  }
];

const insertEquipmentPerformanceData = [
  {
    _id: new ObjectId(),
    assetId: insertAssetData[1]._id,
    performanceDate: new Date("2023-06-05T08:00:00Z"),
    parameters: [{ parameter1: 10 }, { parameter2: 20 }, { parameter3: 30 }],
    buildingName: "Filter House",
    floorNumber: 1,
  },
  {
    _id: new ObjectId(),
    assetId: insertAssetData[0]._id,
    performanceDate: new Date("2023-06-10T12:00:00Z"),
    parameters: [{ parameter1: 15 }, { parameter2: 25 }, { parameter3: 35 }],
    buildingName: "Main Building",
    floorNumber: 1,
  },
  
];

const insertTechnicianData = [
  {
    _id: new ObjectId(),
    technicianName: "John Smith",
    technicianEmail: "johnsmith@example.com",
    technicianPhone: "123-456-7890",
  },
  {
    _id: new ObjectId(),
    technicianName: "Jane Doe",
    technicianEmail: "janedoe@example.com",
    technicianPhone: "987-654-3210",
  },
];

const insertMaintenanceTaskData = [
  {
    _id: new ObjectId(),
    assetId: insertAssetData[1]._id,
    taskName: "Routine Maintenance",
    taskDescription: "Perform routine maintenance on the pump",
    scheduledDate: new Date("2023-06-01T10:00:00Z"),
    completionDate: new Date("2023-06-01T11:30:00Z"),
    technicianId: insertTechnicianData[0]._id,
    status: "Completed",
  },
  {
    _id: new ObjectId(),
    assetId: insertAssetData[0]._id,
    taskName: "Filter Replacement",
    taskDescription: "Replace the filter in the filtration unit",
    scheduledDate: new Date("2023-06-15T13:00:00Z"),
    completionDate: new Date("2023-06-23T12:00:00Z"),
    technicianId: insertTechnicianData[0]._id,
    status: "Scheduled",
  },
];

const insertUserData = [
  {
    firstName: "John",
    lastName: "Doe",
    address: "123 Main St",
    phone: "123-456-7890",
    email: "johndoe@example.com",
    password: "secretpassword",
  },
];

const clearData = async () => {
  await Asset.deleteMany({});
  await MaintenanceTask.deleteMany({});
  await Technician.deleteMany({});
  await EquipmentPerformance.deleteMany({});
  await Location.deleteMany({});
  await User.deleteMany({});

  console.log("Cleared Sample Data Successfully!");
};

const insertData = async () => {
  try {
    await Asset.create(insertAssetData);
    await EquipmentPerformance.create(insertEquipmentPerformanceData);
    await Location.create(insertLocationData);
    await MaintenanceTask.create(insertMaintenanceTaskData);
    await Technician.create(insertTechnicianData);
    await User.create(insertUserData);

    console.log("Inserted Sample Data Successfully!");
  } catch (err) {
    console.log("Failed to insert data", err);
  }
};

module.exports = { insertData, clearData };
