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
Object.defineProperty(exports, "__esModule", { value: true });
const redis_1 = require("../redis");
class RedisService {
    getCache(name) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield redis_1.client.get(name);
                return response;
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    setCache(name, response) {
        return __awaiter(this, void 0, void 0, function* () {
            if (response === null || response === undefined) {
                console.log("Response cannot be null or undefined");
            }
            try {
                yield redis_1.client.set(name, JSON.stringify(response), {
                    EX: process.env.REDIS_EX
                        ? parseInt(process.env.REDIS_EX, 10)
                        : undefined,
                    NX: true,
                });
            }
            catch (error) {
                console.log(error);
            }
        });
    }
}
exports.default = new RedisService();
