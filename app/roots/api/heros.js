"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var hero_1 = require("../models/hero");
var router = express.Router();
router.get('/', function (req, res) {
    hero_1.default.find().then(function (match) {
        res.json(match);
    });
});
exports.default = router;
