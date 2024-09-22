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
const order_service_1 = __importDefault(require("../services/order-service"));
class OrdersController {
    insertOrders(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const order = yield order_service_1.default.insertOrders(req.body);
                res.json(order);
            }
            catch (err) {
                next(err);
            }
        });
    }
    selectOrders(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const orders = yield order_service_1.default.getByUserId(Number(id));
                res.json(orders);
            }
            catch (err) {
                next(err);
            }
        });
    }
    selectAllOrders(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const orders = yield order_service_1.default.getAll();
                res.json(orders);
            }
            catch (err) {
                next(err);
            }
        });
    }
    changeStatusOrder(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const order = yield order_service_1.default.updateStatus(req.body.id_order, req.body.newStatus);
                res.json({
                    message: "Статус заказа обновлен",
                    updatedOrder: order,
                });
            }
            catch (err) {
                next(err);
            }
        });
    }
    CancelStatusUser(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id_order } = req.params;
                const order = yield order_service_1.default.CancelStatusUser(id_order);
                res.json({
                    message: "Заказ отменен пользователем",
                    newStatusOrder: order,
                });
            }
            catch (err) {
                next(err);
            }
        });
    }
    deleteOrder(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id_order } = req.params;
                const message = yield order_service_1.default.delete(id_order);
                res.json(message);
            }
            catch (err) {
                next(err);
            }
        });
    }
    selectOrderById(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id_order } = req.params;
                const order = yield order_service_1.default.getById(id_order);
                res.json(order);
            }
            catch (err) {
                next(err);
            }
        });
    }
}
exports.default = new OrdersController();
