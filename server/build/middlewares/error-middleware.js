"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;
const api_error_1 = require("../exceptions/api-error");
function default_1(err, req, res, next) {
    console.log(err);
    if (err instanceof api_error_1.ApiError) {
        return res
            .status(err.status)
            .json({ message: err.message, errors: err.errors });
    }
    return res
        .status(500)
        .json({ message: "Непредвиденная ошибка на стороне сервера" });
}
