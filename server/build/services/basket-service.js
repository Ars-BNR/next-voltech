"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const api_error_1 = require("../exceptions/api-error");
const models_1 = require("../models");
const sequelize_1 = __importDefault(require("sequelize"));
class BasketService {
    getBasket(id_user) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!id_user) {
                throw api_error_1.ApiError.BadRequest("Не указан id пользователя");
            }
            const basket = yield models_1.BasketModel.findAll({
                where: { id_user },
                include: [
                    {
                        model: models_1.EquipmentsModel,
                        as: "equipment",
                        attributes: [
                            "type_equip",
                            "price",
                            "pathimg",
                            [sequelize_1.default.literal(`"equipment"."main_info"->>'Бренд'`), "brand"],
                            [sequelize_1.default.literal(`"equipment"."main_info"->>'Модель'`), "model"],
                        ],
                    },
                ],
            });
            return basket;
        });
    }
    addToBasket(_a) {
        return __awaiter(this, arguments, void 0, function* ({ id_equipment, id_user, count }) {
            if (!id_equipment || !id_user || !count) {
                throw api_error_1.ApiError.BadRequest(`Не все параметры id_equipment:${id_equipment}, id_user:${id_user} count:${count} указаны`);
            }
            const record = yield models_1.BasketModel.findOne({
                where: { id_equipment, id_user },
            });
            if (record) {
                record.count += count;
                return record.save();
            }
            else {
                return models_1.BasketModel.create({ id_equipment, id_user, count });
            }
        });
    }
    removeFromBasket(_a) {
        return __awaiter(this, arguments, void 0, function* ({ id_equipment, id_user }) {
            if (!id_equipment || !id_user) {
                throw api_error_1.ApiError.BadRequest(`Не все параметры id_equipment:${id_equipment}, id_user:${id_user} указаны`);
            }
            return models_1.BasketModel.destroy({ where: { id_equipment, id_user } });
        });
    }
    decreaseItemCount(_a) {
        return __awaiter(this, arguments, void 0, function* ({ id_equipment, id_user }) {
            if (!id_equipment || !id_user) {
                throw api_error_1.ApiError.BadRequest(`Не все параметры id_equipment:${id_equipment}, id_user:${id_user} указаны`);
            }
            const record = yield models_1.BasketModel.findOne({
                where: { id_equipment, id_user },
            });
            if (record) {
                record.count = record.count > 1 ? record.count - 1 : 1;
                if (record.count === 0) {
                    return record.destroy();
                }
                else {
                    return record.save();
                }
            }
            else {
                throw api_error_1.ApiError.BadRequest("Товар в корзине не найден");
            }
        });
    }
    clearBasket(id_user) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!id_user) {
                throw api_error_1.ApiError.BadRequest("Не указан id пользователя");
            }
            return models_1.BasketModel.destroy({ where: { id_user } });
        });
    }
}
exports.default = new BasketService();
