var mongoose = require('mongoose')

var parentSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number
  // children: [childSchema]
})

var Parent = mongoose.model('Parent', parentSchema)

module.exports = Parent
