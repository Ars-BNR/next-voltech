"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connect_db_1 = __importDefault(require("../db/connect-db"));
const EquipmentsModel = connect_db_1.default.define("equipments", {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    type_equip: sequelize_1.DataTypes.STRING(225),
    price: sequelize_1.DataTypes.INTEGER,
    pathimg: sequelize_1.DataTypes.TEXT,
    short_info: sequelize_1.DataTypes.JSONB,
    main_info: sequelize_1.DataTypes.JSONB,
    description: sequelize_1.DataTypes.JSONB,
}, {
    timestamps: false,
});
exports.default = EquipmentsModel;
