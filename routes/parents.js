var express = require('express')
var router = express.Router()
var mongoose = require('mongoose')
var Parent = require('../models/parent')

// router.get('/', function (req, res) {
//   res.render('parents/index')
// })
// router.get('/create', function (req, res) {
//   res.render('parents/create')
// })
// router.get('/findAll', function (req, res) {
//   Parent.find({}, function(err, parent) {
//   if (err) return res.send(err)
//   res.send(parent)
// })
// router.get('/findOne/:id', function (req, res) {
//
// })

router.post('/', function (req, res) {
  var newParent = new Parent({
    name: req.body.ParentName.name,
    year: req.body.ParentEmail.email,
    age: req.body.ParentAge.age
  })
  newParent.save(function (err) {
    if (err) throw new Error(err)
  })
  res.render('parents/index', {
    'message': 'Form Submitted'
  })
  res.send(newParent)
})

module.exports = router
