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
exports.generateAndSaveTokens = generateAndSaveTokens;
const token_service_1 = __importDefault(require("../services/token-service"));
function generateAndSaveTokens(profilesDto) {
    return __awaiter(this, void 0, void 0, function* () {
        const tokens = token_service_1.default.generateTokens(Object.assign({}, profilesDto));
        yield token_service_1.default.saveToken(profilesDto.id, tokens.refreshToken);
        return Object.assign(Object.assign({}, tokens), { profiles: profilesDto });
    });
}
