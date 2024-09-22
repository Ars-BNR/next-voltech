"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connect_db_1 = __importDefault(require("../db/connect-db"));
const TokenModel = connect_db_1.default.define("Token", {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    user: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    refreshToken: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
}, {
    timestamps: false,
});
exports.default = TokenModel;
