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
const basket_service_1 = __importDefault(require("../services/basket-service"));
class BasketController {
    insertBasket(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newRecord = yield basket_service_1.default.addToBasket(req.body);
                res.json(newRecord);
            }
            catch (err) {
                next(err);
            }
        });
    }
    selectBasket(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const basket = yield basket_service_1.default.getBasket(Number(id));
                res.json(basket);
            }
            catch (err) {
                next(err);
            }
        });
    }
    deleteBasket(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield basket_service_1.default.removeFromBasket(req.body);
                res.json({ message: "Товар удален из корзины" });
            }
            catch (err) {
                next(err);
            }
        });
    }
    decreaseBasket(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield basket_service_1.default.decreaseItemCount(req.body);
                res.json({ message: "Успешное уменьшение количества товара в корзине" });
            }
            catch (err) {
                next(err);
            }
        });
    }
    clearBasket(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield basket_service_1.default.clearBasket(Number(req.params.id_user));
                res.json({ message: "Корзина очищена" });
            }
            catch (err) {
                next(err);
            }
        });
    }
}
exports.default = new BasketController();
