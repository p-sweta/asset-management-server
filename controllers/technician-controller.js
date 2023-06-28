const technician = require("../models/technician");

const getAllTechnician = async (req, res) => {
  try {
    const technicians = await technician.find();
    res.status(200).json(technicians);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Technicians not available" });
  }
};

const getTechnician = async (req, res) => {
  const { id } = req.params;

  try {
    const singleTechnician = await technician.findById(id);
    if (singleTechnician.length === 0) {
      return res.status(404).json({
        message: `Technician with ID: ${id} not found`,
      });
    }
    res.status(200).json(singleTechnician);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: `Failed to get technician with ID: ${id}` });
  }
};

const createTechnician = async (req, res) => {
  const { technicianName, technicianEmail, technicianPhone } = req.body;

  try {
    const newTechnician = new technician({
      technicianName,
      technicianEmail,
      technicianPhone,
    });
    const savedTechnician = await newTechnician.save();
    res.status(201).json(savedTechnician);
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ error: `Failed to add new technician item ${error}` });
  }
};

const updateTechnician = async (req, res) => {
  const { id } = req.params;
  const { technicianName, technicianEmail, technicianPhone } = req.body;
  try {
    const updatedTechnician = await technician.findByIdAndUpdate(
      id,
      { technicianName, technicianEmail, technicianPhone },
      { new: true }
    );

    if (!updatedTechnician) {
      return res.status(404).json({
        message: `Technician with ID: ${id} not found`,
      });
    }
    res.status(200).json(updatedTechnician);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: `Failed to update technician info with ID: ${id}` });
  }
};

const deleteTechnician = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedTechnician = await technician.findByIdAndDelete(id);
    if (!deletedTechnician) {
      return res
        .status(404)
        .json({ message: `Technician with ID: ${id} not found` });
    }
    res.status(200).json(deletedTechnician);
  } catch (error) {
    res
      .status(500)
      .json({ message: `Failed to delete technician with ID: ${id}` });
  }
};

module.exports = {
  getAllTechnician,
  getTechnician,
  createTechnician,
  updateTechnician,
  deleteTechnician,
};
