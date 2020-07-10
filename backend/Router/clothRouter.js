const express = require('express');

const clothModel = require('../model/cloth');

const router = express.Router();

router
    .get('/', function (req, res) {
        clothModel.find({})
            .then(function (data) {
                res.statusCode = 200;
                res.json(data)
            })
            .catch(function () {
                res.statusCode = 404;
                res.end("Error while getting data");
            });
    })
    .post("/", function (req, res) {
        clothModel.create(req.body)
            .then((data) => {
                res.statusCode = 200;
                res.json(data);
            })
            .catch((err) => {
                res.statusCode = 404;
                res.end("Error while insert");
            });
    })
    .put("/", function (req, res) {
        clothModel.updateOne({ _id: req.body._id }, { $set: req.body }, { updaset: true })
            .then((data) => {
                res.statusCode = 200;
                res.json(data);
            })
            .catch((err) => {
                res.statusCode = 404;
                res.end("Error while update");
            });
    })
    .delete("/:id", function (req, res) {
        clothModel.findByIdAndDelete(req.params.id)
            .then((data) => {
                res.statusCode = 200;
                res.json(data);
            })
            .catch((err) => {
                res.statusCode = 404;
                res.end("Error while delete");
            });
    });

module.exports = router;