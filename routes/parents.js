var express = require('express')
var router = express.Router()

// var Child = require('../models/child')
var Parent = require('../models/parent')

router.get('/', function (req, res) {
  res.render('parents/index')
})
router.get('/create', function (req, res) {
  res.render('parents/create')
})
// router.get('/all', function (req, res) {
//   Parent.find({}, function(err, parentsArr) {
//   if (err) throw new Error(err)
// })
// router.get('/findOne/:id', function (req, res) {
//
// })

router.post('/', function (req, res) {
  // var newChild = new Child({
  //   name: req.body.ChildName.name,
  //   email: req.body.ChildEmail.email,
  //   age: req.body.ChildAge.age
  // })
  // newChild.save(function (err) {
  //   if (err) throw new Error(err)
  // })
  // res.render('parents/index')
  // res.send(newChild)
  var newParent = new Parent({
    name: req.body.ParentName.name,
    email: req.body.ParentEmail.email,
    age: req.body.ParentAge.age,
    child: [{
      name: req.body.ChildName.name,
      email: req.body.ChildEmail.email,
      age: req.body.ChildAge.age
    }]
  })
  newParent.save(function (err) {
    if (err) throw new Error(err)
  })
  res.render('parents/index')
  res.send(newParent)
})

module.exports = router
