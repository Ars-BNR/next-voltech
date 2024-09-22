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
const path_1 = __importDefault(require("path"));
const catalog_service_1 = __importDefault(require("../services/catalog-service"));
class CatalogController {
    allitems(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const equipments = yield catalog_service_1.default.getAllEquipments(req.query);
                res.json(equipments);
            }
            catch (err) {
                next(err);
            }
        });
    }
    getBrands(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const category = req.query.category;
                const brand = yield catalog_service_1.default.getBrandsByCategory(category);
                res.json(brand);
            }
            catch (err) {
                next(err);
            }
        });
    }
    getImg(req, res, next) {
        try {
            const imageName = req.params.img;
            const imagePath = path_1.default.join(__dirname, "..", "img", `${imageName}.png`);
            res.sendFile(imagePath);
        }
        catch (err) {
            next(err);
        }
    }
    createItem(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (!req.files || !req.files.pathimg) {
                    throw new Error("File is missing");
                }
                const newEquipment = yield catalog_service_1.default.createItem(req.body, req.files.pathimg);
                res.json(newEquipment);
            }
            catch (err) {
                next(err);
            }
        });
    }
}
exports.default = new CatalogController();
