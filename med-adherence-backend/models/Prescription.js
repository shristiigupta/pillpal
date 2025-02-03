const mongoose = require('mongoose');
const prescriptionSchema = new mongoose.Schema({
    doctor: { type: mongoose.Schema.Types.ObjectId, ref: 'Doctor' },
    patient: { type: mongoose.Schema.Types.ObjectId, ref: 'Patient' },
    diagnosis: String,
    medications: [{ name: String, dosage: String, frequency: String }]
});
module.exports = mongoose.model('Prescription', prescriptionSchema);
