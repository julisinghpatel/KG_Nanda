import Doctor from '../models/Doctor.js';

export const getAllDoctors = async (req, res) => {
  try {
    const doctors = await Doctor.find({ isActive: true });
    res.json({ success: true, doctors });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

export const getDoctorsByDepartment = async (req, res) => {
  try {
    const { department } = req.params;
    const doctors = await Doctor.find({ department, isActive: true });
    res.json({ success: true, doctors });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

export const createDoctor = async (req, res) => {
  try {
    const doctor = new Doctor(req.body);
    await doctor.save();
    res.status(201).json({ success: true, doctor });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error' });
  }
};
