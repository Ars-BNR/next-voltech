"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connect_db_1 = __importDefault(require("../db/connect-db"));
const BasketModel = connect_db_1.default.define("basket", {
    idBasket: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    id_equipment: sequelize_1.DataTypes.INTEGER,
    id_user: sequelize_1.DataTypes.INTEGER,
    count: sequelize_1.DataTypes.INTEGER,
}, {
    timestamps: false,
});
exports.default = BasketModel;
