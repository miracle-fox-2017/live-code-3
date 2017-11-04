const express = require('express');
const router = express.Router();
const prod = require('../models/prod');

router.get('/prodHouses', function (req, res) {
    db.all(query, function (err, dataProd) {

        if (!err) {
            res.render('prod', { dataProd });
        } else {
            res.send(err);
        }

    });
});


module.exports = router;