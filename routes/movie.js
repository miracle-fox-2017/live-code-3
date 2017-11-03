var express = require('express')
var router = express.Router()


router.get('/', function (req, res) {
   res.render('movie')
})

module.exports = router