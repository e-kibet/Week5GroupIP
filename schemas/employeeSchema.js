const Schema = require('../config/database')
const mongoose = require('mongoose');

var employeeSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: String,
  email: String,
  status: String,
  employeeNumber: String,
  createdAt: String
}, { collection: 'employees' })
var employeeData = mongoose.model('employees', employeeSchema)

module.exports = employeeData