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
const order_id_1 = __importDefault(require("order-id"));
class OrderService {
    insertOrders(order) {
        return __awaiter(this, void 0, void 0, function* () {
            function getCurrentDate() {
                const date = new Date();
                const formattedDate = date.toISOString().split("T")[0];
                return formattedDate;
            }
            let { name, surname, number, address, id_user, price, allCount, info } = order;
            id_user = +id_user;
            const status = "Обработка";
            const id_order = (0, order_id_1.default)("key").generate();
            const date = getCurrentDate();
            const newOrder = yield models_1.OrdersModel.create({
                name,
                surname,
                number,
                address,
                id_order,
                id_user,
                date,
                price,
                allCount,
                status,
                info,
            });
            return newOrder;
        });
    }
    getByUserId(id) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!id) {
                throw api_error_1.ApiError.BadRequest("Не указан id пользователя");
            }
            return yield models_1.OrdersModel.findAll({
                where: { id_user: id },
                order: [["date", "DESC"]],
            });
        });
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield models_1.OrdersModel.findAll({
                order: [["date", "DESC"]],
            });
        });
    }
    updateStatus(id_order, status) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!id_order) {
                throw api_error_1.ApiError.BadRequest("Не указан id заказа");
            }
            const order = yield models_1.OrdersModel.findOne({ where: { id_order: id_order } });
            if (order) {
                order.status = status;
                return yield order.save();
            }
            else {
                throw api_error_1.ApiError.BadRequest("Заказ не найден");
            }
        });
    }
    CancelStatusUser(id_order) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!id_order) {
                throw api_error_1.ApiError.BadRequest("Не указан id заказа");
            }
            const order = yield models_1.OrdersModel.findOne({ where: { id_order: id_order } });
            const newStatus = "Отменен пользователем";
            if (order) {
                order.status = newStatus;
                return yield order.save();
            }
            else {
                throw api_error_1.ApiError.BadRequest("Заказ не найден");
            }
        });
    }
    delete(id_order) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!id_order) {
                throw api_error_1.ApiError.BadRequest("Не указан id заказа");
            }
            const order = yield models_1.OrdersModel.findOne({ where: { id_order: id_order } });
            if (order) {
                yield order.destroy();
                return { message: "Заказ удалён" };
            }
            else {
                throw api_error_1.ApiError.BadRequest("Заказ не найден");
            }
        });
    }
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!id) {
                throw api_error_1.ApiError.BadRequest("Не указан id заказа");
            }
            if (typeof id === "string") {
                console.log("id строки");
            }
            const order = yield models_1.OrdersModel.findOne({ where: { id_order: id } });
            if (!order)
                throw new Error("Заказ не найден");
            return order;
        });
    }
}
exports.default = new OrderService();
