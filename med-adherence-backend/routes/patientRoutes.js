const express = require('express');
const protect = require('../middleware/authMiddleware');
const Patient = require('../models/Patient');

const router = express.Router();

// Fetch Patient's Prescriptions
router.get('/my-prescriptions', protect, async (req, res) => {
    try {
        const patient = await Patient.findById(req.user.id).populate('prescriptions');
        res.json(patient.prescriptions);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching prescriptions', error });
    }
});

module.exports = router;
