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
const redis_service_1 = __importDefault(require("./redis-service"));
class PersonaPageEquipService {
    getEquipmentsById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let equipment;
            const cacheKey = "equipment:" + id;
            const cacheData = false;
            if (!id) {
                throw api_error_1.ApiError.BadRequest("не указан Id");
            }
            if (cacheData) {
                equipment = JSON.parse(cacheData);
            }
            else {
                equipment = yield models_1.EquipmentsModel.findByPk(id);
                yield redis_service_1.default.setCache(cacheKey, equipment);
            }
            return equipment;
        });
    }
}
exports.default = new PersonaPageEquipService();
