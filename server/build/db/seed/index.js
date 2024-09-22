"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.profile = exports.equipments = void 0;
const equipments_seed_1 = __importDefault(require("./equipments-seed"));
exports.equipments = equipments_seed_1.default;
const profiles_seed_1 = __importDefault(require("./profiles-seed"));
exports.profile = profiles_seed_1.default;
