"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var heroSchema = new mongoose.Schema({});
exports.default = mongoose.model('Hero', heroSchema);
