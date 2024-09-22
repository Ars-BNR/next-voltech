"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.establishForeignKeys = exports.BasketModel = exports.EquipmentsModel = exports.OrdersModel = exports.TokenModel = exports.ProfilesModel = void 0;
const basket_model_1 = __importDefault(require("./basket-model"));
exports.BasketModel = basket_model_1.default;
const equipments_model_1 = __importDefault(require("./equipments-model"));
exports.EquipmentsModel = equipments_model_1.default;
const orders_model_1 = __importDefault(require("./orders-model"));
exports.OrdersModel = orders_model_1.default;
const profiles_model_1 = __importDefault(require("./profiles-model"));
exports.ProfilesModel = profiles_model_1.default;
const token_model_1 = __importDefault(require("./token-model"));
exports.TokenModel = token_model_1.default;
const establishForeignKeys = () => {
    profiles_model_1.default.hasOne(token_model_1.default, { foreignKey: "user" });
    token_model_1.default.belongsTo(profiles_model_1.default, { foreignKey: "user" });
    profiles_model_1.default.hasMany(orders_model_1.default, { foreignKey: "id_user" });
    orders_model_1.default.belongsTo(profiles_model_1.default, { foreignKey: "id_user" });
    profiles_model_1.default.hasMany(basket_model_1.default, { foreignKey: "id_user" });
    basket_model_1.default.belongsTo(profiles_model_1.default, { foreignKey: "id_user" });
    equipments_model_1.default.hasMany(basket_model_1.default, { foreignKey: "id_equipment" });
    basket_model_1.default.belongsTo(equipments_model_1.default, { foreignKey: "id_equipment" });
};
exports.establishForeignKeys = establishForeignKeys;
