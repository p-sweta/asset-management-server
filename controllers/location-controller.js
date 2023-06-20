const location = require("../models/location");

const getAllLocation = async (req, res) => {
  try {
    const locations = await location.find();
    res.status(200).json(locations);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Locations not available" });
  }
};

const getLocationById = async (req, res) => {
  const { id } = req.params;

  try {
    const singleLocation = await location.findById(id);
    if (singleLocation.length === 0) {
      return res.status(404).json({
        message: `Location with ID: ${id} not found`,
      });
    }
    res.status(200).json(singleLocation);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: `Failed to get location with ID: ${id}` });
  }
};

const createLocation = async (req, res) => {};
const updateLocation = async (req, res) => {};
const deleteLocation = async (req, res) => {};

module.exports = {
  getAllLocation,
  getLocationById,
  createLocation,
  updateLocation,
  deleteLocation,
};
