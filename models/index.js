const mongoose = require('mongoose');
const employees = require('./employees');
mongoose.Promise = Promise;
mongoose.set("debug", true);

mongoose.connect('mongodb://localhost/employee', {
    keepAlive: true,
    useNewUrlParser: true
});


module.exports.Employees = employees;