var express = require('express')
var mongoose = require('mongoose')
var bodyParser = require('body-parser')
var parents_routes = require('./routes/parents')
var children_routes = require('./routes/children')

var app = express()
var port = 3000
// Mongoose stuff
mongoose.connect('mongodb://localhost/school-info')
mongoose.Promise = global.Promise

app.set('view engine', 'ejs')

// app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))
// Write models
// var childSchema = new mongoose.Schema({
//   name: String,
//   email: String
// })
// var parentSchema = new mongoose.Schema({
//   name: String,
//   email: String,
//   children: [childSchema]
// })

// var Children = mongoose.model('Children', childSchema)
// var child1 = new Children({
//   name: 'May',
//   email: 'may@gmail.com'
// })
// var child2 = new Children({
//   name: 'Mary',
//   email: 'mary@gmail.com'
// })
// var child3 = new Children({
//   name: 'John',
//   email: 'john@gmail.com'
// })

// var Parent = mongoose.model('Parent', parentSchema)
// var parent1 = new Parent({
//   name: 'David',
//   email: 'david@gmail.com',
//   children: [child1, child3]
// })
// var parent2 = new Parent({
//   name: 'Peter',
//   email: 'peter@gmail.com',
//   children: [child2]
// })
// parent1.save()
// parent2.save()

// app.get('/one_collection', function () {
//   parent.save()
// })
// app.get('/one_to_one_collection', function () {
//   parent.save()
// })
// app.get('/one_to_many_collection', function () {
//   parent.save()
// })

app.use('/parents', parents_routes)

// listen port
app.listen(port)
console.log('Server is running at http://localhost:' + port + '/')
