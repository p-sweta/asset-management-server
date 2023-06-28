const asset = require("../models/asset");
const location = require("../models/location");

const getAssets = async (req, res) => {
  try {
    const assets = await asset.find().populate("locationId");
    const assetsWithLocationName = assets.map((asset) => ({
      _id: asset._id,
      assetName: asset.assetName,
      assetType: asset.assetType,
      assetId: asset.assetId,
      locationId: asset.locationId,
      locationName: asset.locationId.buildingName,
      assetDescription: asset.assetDescription,
      purchaseDate: asset.purchaseDate,
      manufacturer: asset.manufacturer,
      serialNumber: asset.serialNumber,
      warrantyExpirationDate: asset.warrantyExpirationDate,
      maintenanceInterval: asset.maintenanceInterval,
      lastMaintenanceDate: asset.lastMaintenanceDate,
      nextMaintenanceDate: asset.nextMaintenanceDate,
      status: asset.status,
    }));
    res.status(200).json(assetsWithLocationName);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Assets not available" });
  }
};

const getAssetByID = async (req, res) => {
  const { id } = req.params;

  try {
    const singleAsset = await asset.findById(id).populate("locationId");
    if (singleAsset.length === 0) {
      return res.status(404).json({
        message: `Asset with ID: ${id} not found`,
      });
    }
    const assetWithLocationName = {
      _id: singleAsset._id,
      assetName: singleAsset.assetName,
      assetType: singleAsset.assetType,
      assetId: singleAsset.assetId,
      locationId: singleAsset.locationId,
      locationName: singleAsset.locationId.buildingName,
      assetDescription: singleAsset.assetDescription,
      purchaseDate: singleAsset.purchaseDate,
      manufacturer: singleAsset.manufacturer,
      serialNumber: singleAsset.serialNumber,
      warrantyExpirationDate: singleAsset.warrantyExpirationDate,
      maintenanceInterval: singleAsset.maintenanceInterval,
      lastMaintenanceDate: singleAsset.lastMaintenanceDate,
      nextMaintenanceDate: singleAsset.nextMaintenanceDate,
      status: singleAsset.status,
    };
    res.status(200).json(assetWithLocationName);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: `Failed to get asset with ID: ${id}` });
  }
};

const createAsset = async (req, res) => {
  const {
    assetName,
    assetType,
    assetId,
    locationName,
    assetDescription,
    purchaseDate,
    manufacturer,
    serialNumber,
    warrantyExpirationDate,
    maintenanceInterval,
    lastMaintenanceDate,
    nextMaintenanceDate,
    status,
  } = req.body;

  try {
    const getLocationName = await location.findOne({
      buildingName: locationName,
    });
    if (!getLocationName) {
      return res
        .status(404)
        .json({ message: `Location with ${locationName} not found` });
    }
    const locationId = getLocationName._id;

    const newAsset = new asset({
      assetName,
      assetType,
      assetId,
      locationId,
      assetDescription,
      purchaseDate,
      manufacturer,
      serialNumber,
      warrantyExpirationDate,
      maintenanceInterval,
      lastMaintenanceDate,
      nextMaintenanceDate,
      status,
    });
    const savedAsset = await newAsset.save();
    res.status(201).json(savedAsset);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: `Failed to add new asset item ${error}` });
  }
};

const updateAsset = async (req, res) => {
  const { id } = req.params;
  const {
    assetName,
    assetType,
    assetId,
    locationName,
    assetDescription,
    purchaseDate,
    manufacturer,
    serialNumber,
    warrantyExpirationDate,
    maintenanceInterval,
    lastMaintenanceDate,
    nextMaintenanceDate,
    status,
  } = req.body;

  try {
    const updateLocationName = await location.findOne({
      buildingName: locationName,
    });
    if (!updateLocationName) {
      return res
        .status(404)
        .json({ message: `Asset with ${locationName} not found` });
    }
    const locationId = updateLocationName._id;

    const updatedAsset = await asset.findByIdAndUpdate(
      id,
      {
        assetName,
        assetType,
        assetId,
        locationId,
        assetDescription,
        purchaseDate,
        manufacturer,
        serialNumber,
        warrantyExpirationDate,
        maintenanceInterval,
        lastMaintenanceDate,
        nextMaintenanceDate,
        status,
      },
      { new: true }
    );

    if (!updatedAsset) {
      return res.status(404).json({
        message: `Asset with ID: ${id} not found`,
      });
    }
    res.status(200).json(updatedAsset);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: `Failed to update asset item ${error}` });
  }
};

const deleteAsset = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedAsset = await asset.findByIdAndDelete(id);
    if (!deletedAsset) {
      return res
        .status(404)
        .json({ message: `Asset with ID: ${id} not found` });
    }
    res.status(200).json(deletedAsset);
  } catch (error) {
    res.status(500).json({ message: `Failed to delete asset with ID: ${id}` });
  }
};

module.exports = {
  getAssets,
  getAssetByID,
  createAsset,
  updateAsset,
  deleteAsset,
};
