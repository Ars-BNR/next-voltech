"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt_1 = __importDefault(require("bcrypt"));
const profile = [
    {
        id: 1,
        login: "admin",
        password: bcrypt_1.default.hashSync("admin", 3),
        role: "admin",
    },
];
exports.default = profile;
