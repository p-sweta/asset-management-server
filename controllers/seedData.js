const Asset = require("../models/asset");
const EquipmentPerformance = require("../models/equipmentPerformance");
const Location = require("../models/location");
const MaintenanceTask = require("../models/maintenanceTask");
const Technician = require("../models/technician");

const insertLocationData = [
    {
        "buildingName": "Main Building",
        "floorNumber": 1
      },
      {
        "buildingName": "Filter House",
        "floorNumber": 2
      }
]; 

const insertAssetData = [
    {
        "assetName": "Pump A",
        "assetType": "Pump",
        "locationId": insertLocationData[0]._id,
        "assetDescription": "Main water pump",
        "purchaseDate": new Date("2022-01-15T00:00:00Z"),
        "manufacturer": "ABC Corporation",
        "serialNumber": "123456",
        "warrantyExpirationDate": new Date("2024-01-15T00:00:00Z"),
        "maintenanceInterval": "6 months",
        "lastMaintenanceDate": new Date("2023-05-15T00:00:00Z"),
        "nextMaintenanceDate": new Date("2023-11-15T00:00:00Z"),
        "status": "Active"
      },
      {
        "assetName": "Filter Unit",
        "assetType": "Filter",
        "locationId": insertLocationData[1]._id,
        "assetDescription": "Water filtration unit",
        "purchaseDate": new Date("2021-05-20T00:00:00Z"),
        "manufacturer": "XYZ Corporation",
        "serialNumber": "789012",
        "warrantyExpirationDate": new Date("2023-05-20T00:00:00Z"),
        "maintenanceInterval": "3 months",
        "lastMaintenanceDate": new Date("2023-02-20T00:00:00Z"),
        "nextMaintenanceDate": new Date("2023-05-20T00:00:00Z"),
        "status": "Active"
      }
];

const insertEquipmentPerformanceData = [
    {
        "assetId": insertAssetData[1]._id,
        "performanceDate": new Date("2023-06-05T08:00:00Z"),
        "parameters": [
          {"parameter1": 10},
          {"parameter2": 20},
          {"parameter3": 30}
        ],
        "buildingName": "Filter House",
        "floorNumber":  1
      },
      {
        "assetId": insertAssetData[0]._id,
        "performanceDate": new Date("2023-06-10T12:00:00Z"),
        "parameters": [
          {"parameter1": 15},
          {"parameter2": 25},
          {"parameter3": 35}
        ],
        "buildingName": "Main Building",
        "floorNumber":  1
      }
];

const insertTechnicianData = [
    {
        "technicianName": "John Smith",
        "technicianEmail": "johnsmith@example.com",
        "technicianPhone": "123-456-7890"
      },
      {
        "technicianName": "Jane Doe",
        "technicianEmail": "janedoe@example.com",
        "technicianPhone": "987-654-3210"
      }
];

const insertMaintenanceTaskData = [
    {
        "assetId": insertAssetData[1]._id,
        "taskName": "Routine Maintenance",
        "taskDescription": "Perform routine maintenance on the pump",
        "scheduledDate": new Date("2023-06-01T10:00:00Z"),
        "completionDate": new Date("2023-06-01T11:30:00Z"),
        "technicianId": insertTechnicianData[0]._id,
        "status": "Completed"
      },
      {
        "assetId": insertAssetData[0]._id,
        "taskName": "Filter Replacement",
        "taskDescription": "Replace the filter in the filtration unit",
        "scheduledDate": new Date("2023-06-15T13:00:00Z"),
        "completionDate": new Date("2023-06-23T12:00:00Z"),
        "technicianId": insertTechnicianData[0]._id,
        "status": "Scheduled"
      }
];

const clearData = async () => {
    await Asset.deleteMany({});
    await MaintenanceTask.deleteMany({});
    await Technician.deleteMany({});
    await EquipmentPerformance.deleteMany({});
    await Location.deleteMany({});

    console.log("Cleared Sample Data Successfully!");
} ;

const insertData = async () => {
    try {
        await Asset.create(insertAssetData);
        await EquipmentPerformance.create(insertEquipmentPerformanceData);
        await Location.create(insertLocationData);
        await MaintenanceTask.create(insertMaintenanceTaskData);
        await Technician.create(insertTechnicianData);

        console.log("Inserted Sample Data Successfully!");
    } catch (err) {
        console.log("Failed to insert data", err);
    }
}

module.exports = { insertData, clearData };