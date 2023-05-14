"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var profileSchema = new mongoose_1.default.Schema({
    name: {
        title: String,
        first: String,
        last: String
    },
    email: String,
    phone: String,
    picture: String
});
var ProfileModel = mongoose_1.default.model('Profile', profileSchema);
exports.default = ProfileModel;
