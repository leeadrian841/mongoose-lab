var mongoose = require('mongoose')

var childSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number
})
var parentSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
  child: [childSchema]
})

var Child = mongoose.model('Child', childSchema)
var Parent = mongoose.model('Parent', parentSchema)

module.exports = Child
module.exports = Parent
