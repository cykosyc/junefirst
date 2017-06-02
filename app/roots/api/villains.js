"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var villain_1 = require("../models/villain");
var router = express.Router();
router.get('/', function (req, res) {
    villain_1.default.find().then(function (match) {
        res.json(match);
    });
});
exports.default = router;
