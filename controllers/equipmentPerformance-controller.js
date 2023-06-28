const asset = require("../models/asset");
const equipmentPerformance = require("../models/equipmentPerformance");

const getAllEquipmentPerformance = async (req, res) => {
  try {
    const equipmentPerformanceAll = await equipmentPerformance.find();
    res.status(200).json(equipmentPerformanceAll);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Assets not available" });
  }
};
const getEquipmentPerformance = async (req, res) => {};
const createEquipmentPerformance = async (req, res) => {};
const updateEquipmentPerformance = async (req, res) => {};
const deleteEquipmentPerformance = async (req, res) => {};

module.exports = {
  getAllEquipmentPerformance,
  getEquipmentPerformance,
  createEquipmentPerformance,
  updateEquipmentPerformance,
  deleteEquipmentPerformance,
};
