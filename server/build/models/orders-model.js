"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connect_db_1 = __importDefault(require("../db/connect-db"));
const OrdersModel = connect_db_1.default.define("orders", {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: sequelize_1.DataTypes.STRING(255),
    surname: sequelize_1.DataTypes.STRING(255),
    number: sequelize_1.DataTypes.STRING(255),
    address: sequelize_1.DataTypes.TEXT,
    id_order: sequelize_1.DataTypes.STRING(255),
    id_user: sequelize_1.DataTypes.INTEGER,
    date: {
        type: sequelize_1.DataTypes.DATEONLY,
    },
    price: sequelize_1.DataTypes.INTEGER,
    allCount: sequelize_1.DataTypes.INTEGER,
    status: sequelize_1.DataTypes.STRING(255),
    info: sequelize_1.DataTypes.JSONB,
}, {
    timestamps: false,
});
exports.default = OrdersModel;
