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
exports.initializeData = initializeData;
const models_1 = require("../models");
const equipments_model_1 = __importDefault(require("../models/equipments-model"));
const profiles_model_1 = __importDefault(require("../models/profiles-model"));
const connect_db_1 = __importDefault(require("./connect-db"));
const seed_1 = require("./seed");
function autoInsert(model, seed) {
    return __awaiter(this, void 0, void 0, function* () {
        const count = yield model.count();
        if (count === 0) {
            yield model.bulkCreate(seed);
            console.log("\x1b[32m%s\x1b[0m", `✅ Данные добавлены в ${model.name}!`);
        }
    });
}
function initializeData() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            (0, models_1.establishForeignKeys)();
            const existingTables = yield connect_db_1.default.getQueryInterface().showAllTables();
            if (existingTables.length === 0) {
                yield connect_db_1.default.sync({ force: false });
                console.log("\x1b[37m✅ База данных и таблицы созданы!\x1b[0m");
            }
            else {
                yield connect_db_1.default.sync({ force: false });
            }
            yield autoInsert(equipments_model_1.default, seed_1.equipments);
            yield autoInsert(profiles_model_1.default, seed_1.profile);
        }
        catch (error) {
            console.error("\x1b[31m%s\x1b[0m", "❌ Что-то пошло не так при инициализации данных:\n", error);
        }
    });
}
