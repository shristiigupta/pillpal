const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const Doctor = require('./models/Doctor');
const Patient = require('./models/Patient');
const Prescription = require('./models/Prescription');
require('dotenv').config();

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

const seedDatabase = async () => {
    await Doctor.deleteMany({});
    await Patient.deleteMany({});
    await Prescription.deleteMany({});

    const hashedPassword = await bcrypt.hash('password123', 10);

    const doctor1 = new Doctor({ name: "Dr. Smith", email: "smith@example.com", password: hashedPassword });
    await doctor1.save();

    const patient1 = new Patient({ name: "John Doe", uhid: "UHID123", email: "john@example.com", password: hashedPassword });
    await patient1.save();

    console.log("Database seeded!");
    mongoose.connection.close();
};

seedDatabase();
