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
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const token_model_1 = __importDefault(require("../models/token-model"));
class TokenService {
    constructor() {
        this.generateTokens = (payload) => {
            const accessToken = jsonwebtoken_1.default.sign(payload, this.JWT_ACCESS_SECRET, {
                expiresIn: "30m",
            });
            const refreshToken = jsonwebtoken_1.default.sign(payload, this.JWT_REFRESH_SECRET, {
                expiresIn: "30d",
            });
            return {
                accessToken,
                refreshToken,
            };
        };
        this.JWT_ACCESS_SECRET = process.env.JWT_ACCESS_SECRET;
        this.JWT_REFRESH_SECRET = process.env.JWT_REFRESH_SECRET;
    }
    validateAccessToken(token) {
        try {
            const profileData = jsonwebtoken_1.default.verify(token, this.JWT_ACCESS_SECRET);
            return profileData;
        }
        catch (error) {
            return null;
        }
    }
    validateRefreshToken(token) {
        try {
            const profileData = jsonwebtoken_1.default.verify(token, this.JWT_REFRESH_SECRET);
            return profileData;
        }
        catch (error) {
            return null;
        }
    }
    saveToken(userId, refreshToken) {
        return __awaiter(this, void 0, void 0, function* () {
            const tokenData = yield token_model_1.default.findOne({
                where: { user: userId },
            });
            if (tokenData) {
                tokenData.refreshToken = refreshToken;
                yield tokenData.save();
                return tokenData;
            }
            const token = yield token_model_1.default.create({ user: userId, refreshToken });
            return token;
        });
    }
    removeToken(refreshToken) {
        return __awaiter(this, void 0, void 0, function* () {
            const tokenData = yield token_model_1.default.destroy({
                where: {
                    refreshToken: refreshToken,
                },
            });
            return tokenData;
        });
    }
    findToken(refreshToken) {
        return __awaiter(this, void 0, void 0, function* () {
            const tokenData = yield token_model_1.default.findOne({
                where: {
                    refreshToken: refreshToken,
                },
            });
            return tokenData;
        });
    }
}
exports.default = new TokenService();
