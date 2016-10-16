var express = require('express')
var router = express.Router()

var Child = require('../models/child')

router.get('/', function (req, res) {
  res.render('children/index')
})
router.get('/create', function (req, res) {
  res.render('children/create')
})
// router.get('/all', function (req, res) {
//   Parent.find({}, function(err, parentsArr) {
//   if (err) throw new Error(err)
// })
// router.get('/findOne/:id', function (req, res) {
//
// })

router.post('/', function (req, res) {
  var newChild = new Child({
    name: req.body.ChildName.name,
    email: req.body.ChildEmail.email,
    age: req.body.ChildAge.age
  })
  newChild.save(function (err) {
    if (err) throw new Error(err)
  })
  res.render('movies/index')
  res.send(newChild)
})

module.exports = router
