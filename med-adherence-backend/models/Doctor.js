const mongoose = require('mongoose');
const doctorSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    appointments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Patient' }]
});
module.exports = mongoose.model('Doctor', doctorSchema);
