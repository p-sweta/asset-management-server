const express = require("express");
const router = express.Router();
const technicianController = require("../controllers/technician-controller");

router.route('/').get(technicianController.getAllTechnician);
router.route('/:id').get(technicianController.getTechnician);
router.route('/').post(technicianController.createTechnician);
router.route('/').patch(technicianController.updateTechnician);
router.route('/').delete(technicianController.deleteTechnician);

module.exports = router;