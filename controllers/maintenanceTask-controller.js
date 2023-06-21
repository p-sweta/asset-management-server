const asset = require("../models/asset");
const technician = require("../models/technician");
const maintenanceTask = require("../models/maintenanceTask");

const getAllMaintenanceTask = async (req, res) => {
  try {
    const maintenanceTasks = await maintenanceTask.find();
    res.status(200).json(maintenanceTasks);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Assets not available" });
  }
};

const getMaintenanceTask = async (req, res) => {
  const { id } = req.params;

  try {
    const singleTask = await maintenanceTask.findById(id);
    if (singleTask.length === 0) {
      return res.status(404).json({
        message: `Task with ID: ${id} not found`,
      });
    }
    res.status(200).json(singleTask);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: `Failed to get task with ID: ${id}` });
  }
};

const createMaintenanceTask = async (req, res) => {
  const {
    assetName,
    taskName,
    taskDescription,
    scheduledDate,
    completionDate,
    technicianName,
    status
  } = req.body;

  try {
    const getAssetName = await asset.findOne({
        assetName: assetName
    });
    if (!getAssetName) {
      return res
        .status(404)
        .json({ message: `Asset with name: ${assetName} not found` });
    }
    const assetId = getAssetName._id;

    const getTechnicianName = await technician.findOne({
        technicianName: technicianName
    });
    if (!getTechnicianName) {
      return res
        .status(404)
        .json({ message: `Technician with name: ${technicianName} not found` });
    }
    const technicianId = getTechnicianName._id;

    const newTask = new maintenanceTask({
        assetId,
        taskName,
        taskDescription,
        scheduledDate,
        completionDate,
        technicianId,
        status
    });

    const savedTask = await newTask.save();
    res.status(201).json(savedTask);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: `Failed to add new task item ${error}` });
  }
};

const updateMaintenanceTask = async (req, res) => {
    const { id } = req.params;
    const {
        assetName,
        taskName,
        taskDescription,
        scheduledDate,
        completionDate,
        technicianName,
        status
      } = req.body;
    
      try {
        const updateAssetName = await asset.findOne({
            assetName: assetName
        });
        if (!updateAssetName) {
          return res
            .status(404)
            .json({ message: `Asset with name: ${assetName} not found` });
        }
        const assetId = updateAssetName._id;
    
        const updateTechnicianName = await technician.findOne({
            technicianName: technicianName
        });
        if (!updateTechnicianName) {
          return res
            .status(404)
            .json({ message: `Technician with name: ${technicianName} not found` });
        }
        const technicianId = updateTechnicianName._id;
    
        const updatedTask = await maintenanceTask.findByIdAndUpdate(id,{
            assetId,
            taskName,
            taskDescription,
            scheduledDate,
            completionDate,
            technicianId,
            status
        }, { new: true });
    
        if (!updatedTask) {
            return res.status(404).json({
              message: `Task with ID: ${id} not found`,
            });
          }
        res.status(201).json(updatedTask);
      } catch (error) {
        console.log(error);
        res.status(500).json({ error: `Failed to update task item ${error}` });
      }
};

const deleteMaintenanceTask = async (req, res) => {
    const { id } = req.params;
    try {
      const deletedTask = await maintenanceTask.findByIdAndDelete(id);
      if (!deletedTask) {
        return res.status(404).json({ message: `Task with ID: ${id} not found` });
      }
      res.status(200).json(deletedTask);
    } catch (error) {
      res.status(500).json({  message: `Failed to delete task with ID: ${id}` });
    }
};

module.exports = {
  getAllMaintenanceTask,
  getMaintenanceTask,
  createMaintenanceTask,
  updateMaintenanceTask,
  deleteMaintenanceTask,
};
