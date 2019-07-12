const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    age: {
        type: String,
        required: true
    }
});

const Employee = mongoose.model("Employee", EmployeeSchema);

module.exports = Employee;