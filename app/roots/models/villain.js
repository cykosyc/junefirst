"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var villainSchema = new mongoose.Schema({});
exports.default = mongoose.model('Villain', villainSchema);
