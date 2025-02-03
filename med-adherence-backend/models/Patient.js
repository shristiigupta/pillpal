const mongoose = require('mongoose');
const patientSchema = new mongoose.Schema({
    uhid: String,
    name: String,
    email: String,
    password: String,
    prescriptions: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Prescription' }]
});
module.exports = mongoose.model('Patient', patientSchema);
