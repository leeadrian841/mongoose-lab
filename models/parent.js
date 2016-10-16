var mongoose = require('mongoose')

// var childSchema = new mongoose.Schema({
//   name: String,
//   email: String
// })
var parentSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number
})

var Parent = mongoose.model('Parent', parentSchema)

module.exports = Parent
