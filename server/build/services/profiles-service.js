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
const bcrypt_1 = __importDefault(require("bcrypt"));
const api_error_1 = require("../exceptions/api-error");
const profile_dto_1 = require("../dtos/profile-dto");
const token_service_1 = __importDefault(require("./token-service"));
const models_1 = require("../models");
const generateAndSaveTokens_1 = require("../utils/generateAndSaveTokens");
class ProfilesService {
    registration(login, password) {
        return __awaiter(this, void 0, void 0, function* () {
            const candidate = yield models_1.ProfilesModel.findOne({ where: { login } });
            if (candidate) {
                throw api_error_1.ApiError.BadRequest(`Пользователь с логином ${login} уже существует`);
            }
            const hashPassword = yield bcrypt_1.default.hash(password, 3);
            const profile = yield models_1.ProfilesModel.create({
                login,
                password: hashPassword,
            });
            const profilesDto = new profile_dto_1.ProfilesDto(profile);
            return (0, generateAndSaveTokens_1.generateAndSaveTokens)(profilesDto);
        });
    }
    login(login, password) {
        return __awaiter(this, void 0, void 0, function* () {
            const profiles = yield models_1.ProfilesModel.findOne({ where: { login } });
            if (!profiles) {
                throw api_error_1.ApiError.BadRequest("Пользователь с таким email не найден");
            }
            const isPassEquals = yield bcrypt_1.default.compare(password, profiles.password);
            if (!isPassEquals) {
                throw api_error_1.ApiError.BadRequest("Неверный пароль");
            }
            const profilesDto = new profile_dto_1.ProfilesDto(profiles);
            return (0, generateAndSaveTokens_1.generateAndSaveTokens)(profilesDto);
        });
    }
    logout(refreshToken) {
        return __awaiter(this, void 0, void 0, function* () {
            const token = yield token_service_1.default.removeToken(refreshToken);
            return token;
        });
    }
    refresh(refreshToken) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!refreshToken) {
                throw api_error_1.ApiError.UnauthorizedError();
            }
            const profileData = token_service_1.default.validateRefreshToken(refreshToken);
            const tokenFromDb = yield token_service_1.default.findToken(refreshToken);
            // console.log(profileData, "profileData");
            // console.log(tokenFromDb, "tokenFromDb");
            if (!profileData || !tokenFromDb) {
                throw api_error_1.ApiError.UnauthorizedError();
            }
            if (typeof profileData === "string") {
                throw api_error_1.ApiError.UnauthorizedError();
            }
            const profiles = yield models_1.ProfilesModel.findOne({
                where: {
                    id: profileData.id,
                },
            });
            if (!profiles) {
                throw new Error("Ошибка при создании пользователя");
            }
            const profilesDto = new profile_dto_1.ProfilesDto(profiles);
            return (0, generateAndSaveTokens_1.generateAndSaveTokens)(profilesDto);
        });
    }
    getAllUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            const profiles = yield models_1.ProfilesModel.findAll();
            return profiles;
        });
    }
}
exports.default = new ProfilesService();
