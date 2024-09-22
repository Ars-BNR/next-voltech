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
const sequelize_1 = require("sequelize");
const models_1 = require("../models");
const File_service_1 = __importDefault(require("./File-service"));
class CatalogService {
    getAllEquipments(query) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a, _b;
            let where = {};
            if (query.category) {
                where.type_equip = query.category;
            }
            if (query.price) {
                if (query.price.includes("-")) {
                    const [minPrice, maxPrice] = query.price.split("-").map(Number);
                    where.price = {
                        [sequelize_1.Op.gte]: minPrice,
                        [sequelize_1.Op.lte]: maxPrice,
                    };
                }
                else {
                    where.price = Number(query.price);
                }
            }
            if (query.brand) {
                const brands = query.brand.split(",");
                where["main_info"] = {
                    Бренд: {
                        [sequelize_1.Op.in]: brands,
                    },
                };
            }
            const page = (_a = Number(query.page)) !== null && _a !== void 0 ? _a : 1;
            const limit = (_b = Number(query.limit)) !== null && _b !== void 0 ? _b : 2;
            const offset = (page - 1) * limit;
            const { count, rows } = yield models_1.EquipmentsModel.findAndCountAll({
                where,
                limit,
                offset,
            });
            const maxPrice = yield models_1.EquipmentsModel.max("price", { where });
            const minPrice = yield models_1.EquipmentsModel.min("price", { where });
            const totalPages = Math.ceil(count / limit);
            return {
                total: count,
                page,
                limit,
                totalPages,
                maxPrice,
                minPrice,
                data: rows,
            };
        });
    }
    getBrandsByCategory(category) {
        return __awaiter(this, void 0, void 0, function* () {
            const brands = yield models_1.EquipmentsModel.findAll({
                attributes: [
                    [
                        sequelize_1.Sequelize.fn("DISTINCT", sequelize_1.Sequelize.json("main_info->>'Бренд'")),
                        "brand",
                    ],
                ],
                where: { type_equip: category },
            });
            return brands.map((brand) => brand.get("brand"));
        });
    }
    createItem(equipment, pathimg) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("equipment", equipment);
            const fileName = yield File_service_1.default.saveFile(pathimg);
            let { type_equip, price, short_info, main_info, description } = equipment;
            short_info = JSON.parse(short_info);
            main_info = JSON.parse(main_info);
            description = JSON.parse(description);
            const createdEquip = yield models_1.EquipmentsModel.create({
                type_equip,
                price,
                short_info,
                main_info,
                description,
                pathimg: fileName,
            });
            return createdEquip;
        });
    }
}
exports.default = new CatalogService();
