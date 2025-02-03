const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Doctor = require('../models/Doctor');
const Patient = require('../models/Patient');

const router = express.Router();

// Register Doctor
router.post('/register/doctor', async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const newDoctor = new Doctor({ name, email, password: hashedPassword });
        await newDoctor.save();
        res.status(201).json({ message: 'Doctor registered successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error registering doctor', error });
    }
});

// Register Patient
router.post('/register/patient', async (req, res) => {
    const { name, uhid, email, password } = req.body;
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const newPatient = new Patient({ name, uhid, email, password: hashedPassword });
        await newPatient.save();
        res.status(201).json({ message: 'Patient registered successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error registering patient', error });
    }
});

// Login for Both Doctor & Patient
router.post('/login', async (req, res) => {
    const { email, password, role } = req.body;

    try {
        let user = role === 'doctor' ? await Doctor.findOne({ email }) : await Patient.findOne({ email });

        if (!user) return res.status(404).json({ message: 'User not found' });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(401).json({ message: 'Invalid credentials' });

        const token = jwt.sign({ id: user._id, role }, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.json({ message: 'Login successful', token });
    } catch (error) {
        res.status(500).json({ message: 'Login failed', error });
    }
});

module.exports = router;
