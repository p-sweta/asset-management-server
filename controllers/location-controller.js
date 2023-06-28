const location = require("../models/location");
const asset = require("../models/asset");

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

const getAssetsByLocationId = async (req, res) => {
  const { id } = req.params;

  try {
    const assets = await asset.find({ locationId: id });
    res.status(200).json(assets);
  } catch (error) {
    res.status(500).json({ message: "Assets at this location not available" });
  }
};

const createLocation = async (req, res) => {
  const { buildingName, floorNumber } = req.body;

  try {
    const newLocation = new location({
      buildingName,
      floorNumber,
    });
    const savedLocation = await newLocation.save();
    res.status(201).json(savedLocation);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: `Failed to add new location item ${error}` });
  }
};

const updateLocation = async (req, res) => {
  const { id } = req.params;
  const { buildingName, floorNumber } = req.body;
  try {
    const updatedLocation = await location.findByIdAndUpdate(
      id,
      { buildingName, floorNumber },
      { new: true }
    );

    if (!updatedLocation) {
      return res.status(404).json({
        message: `Location with ID: ${id} not found`,
      });
    }
    res.status(200).json(updatedLocation);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: `Failed to update location with ID: ${id}` });
  }
};
const deleteLocation = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedLocation = await location.findByIdAndDelete(id);
    if (!deletedLocation) {
      return res
        .status(404)
        .json({ message: `Location with ID: ${id} not found` });
    }
    res.status(200).json(deletedLocation);
  } catch (error) {
    res
      .status(500)
      .json({ message: `Failed to delete location with ID: ${id}` });
  }
};

module.exports = {
  getAllLocation,
  getLocationById,
  getAssetsByLocationId,
  createLocation,
  updateLocation,
  deleteLocation,
};
