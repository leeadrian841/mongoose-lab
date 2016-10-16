var mongoose = require('mongoose')

var childSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number
})

var Child = mongoose.model('Child', childSchema)

module.exports = Child
