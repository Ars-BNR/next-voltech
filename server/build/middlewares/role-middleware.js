"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
function default_1(roleRequired) {
    return function (req, res, next) {
        if (req.method === "OPTIONS") {
            next();
        }
        try {
            const authHeader = req.headers.authorization;
            if (!authHeader) {
                return res.status(403).json({ message: "Пользователь не авторизован" });
            }
            const token = authHeader.split(" ")[1];
            // console.log(token);
            if (!token) {
                return res.status(403).json({ message: "Пользователь не авторизован" });
            }
            const secret = process.env.JWT_ACCESS_SECRET;
            if (!secret) {
                throw new Error("JWT_ACCESS_SECRET is not defined");
            }
            const { role } = jsonwebtoken_1.default.verify(token, secret);
            // console.log(role);
            if (role == roleRequired) {
                next();
            }
            else {
                res.status(403).json({
                    message: "Доступ запрещен. У пользователя недостаточно прав.",
                });
            }
        }
        catch (error) {
            return res.status(403).json({ message: "Пользователь не авторизован" });
        }
    };
}
