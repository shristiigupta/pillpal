const express = require('express');
const protect = require('../middleware/authMiddleware');
const Doctor = require('../models/Doctor');
const Patient = require('../models/Patient');
const Prescription = require('../models/Prescription');

const router = express.Router();

// Fetch Doctor's Appointments
router.get('/appointments', protect, async (req, res) => {
    try {
        const doctor = await Doctor.findById(req.user.id).populate('appointments');
        res.json(doctor.appointments);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching appointments', error });
    }
});

// Upload Prescription
router.post('/prescription', protect, async (req, res) => {
    const { patientId, diagnosis, medications } = req.body;

    try {
        const prescription = new Prescription({ doctor: req.user.id, patient: patientId, diagnosis, medications });
        await prescription.save();

        await Patient.findByIdAndUpdate(patientId, { $push: { prescriptions: prescription._id } });

        res.status(201).json({ message: 'Prescription added successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error adding prescription', error });
    }
});

// Get a Specific Patient's Data
router.get('/patient/:id', protect, async (req, res) => {
    try {
        const patient = await Patient.findById(req.params.id).populate('prescriptions');
        res.json(patient);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching patient details', error });
    }
});

module.exports = router;
