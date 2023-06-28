const express = require("express");
const router = express.Router();
const locationController = require("../controllers/location-controller.js");

router.route("/").get(locationController.getAllLocation);
router.route("/:id").get(locationController.getLocationById);
router.route("/:id/assets").get(locationController.getAssetsByLocationId);
router.route("/").post(locationController.createLocation);
router.route("/:id").patch(locationController.updateLocation);
router.route("/:id").delete(locationController.deleteLocation);

module.exports = router;
