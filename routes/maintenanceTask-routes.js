const express = require("express");
const router = express.Router();
const maintenanceTaskController = require("../controllers/maintenanceTask-controller");

router.route("/").get(maintenanceTaskController.getAllMaintenanceTask);
router.route("/:id").get(maintenanceTaskController.getMaintenanceTask);
router.route("/").post(maintenanceTaskController.createMaintenanceTask);
router.route("/:id").patch(maintenanceTaskController.updateMaintenanceTask);
router.route("/:id").delete(maintenanceTaskController.deleteMaintenanceTask);

module.exports = router;
