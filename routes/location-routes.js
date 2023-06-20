const express = require("express");
const router = express.Router();
const locationController = require("../controllers/location-controller");

router.route('/').get(locationController.getAllLocation);
router.route('/:id').get(locationController.getLocationById);
router.route('/').post(locationController.createLocation);
router.route('/').patch(locationController.updateLocation);
router.route('/').delete(locationController.deleteLocation);

module.exports = router;