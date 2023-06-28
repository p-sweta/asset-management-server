const express = require("express");
const router = express.Router();
const equipmentPerformanceController = require("../controllers/equipmentPerformance-controller");

router
  .route("/")
  .get(equipmentPerformanceController.getAllEquipmentPerformance);
router
  .route("/:id")
  .get(equipmentPerformanceController.getEquipmentPerformance);
router
  .route("/")
  .post(equipmentPerformanceController.createEquipmentPerformance);
router
  .route("/")
  .patch(equipmentPerformanceController.updateEquipmentPerformance);
router
  .route("/")
  .delete(equipmentPerformanceController.deleteEquipmentPerformance);

module.exports = router;
