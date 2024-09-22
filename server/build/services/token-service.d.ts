import jwt from "jsonwebtoken";
import { TokenType } from "../types/type";
declare class TokenService {
    private readonly JWT_ACCESS_SECRET;
    private readonly JWT_REFRESH_SECRET;
    constructor();
    generateTokens: (payload: any) => {
        accessToken: string;
        refreshToken: string;
    };
    validateAccessToken(token: string): string | jwt.JwtPayload | null;
    validateRefreshToken(token: string): string | jwt.JwtPayload | null;
    saveToken(userId: number, refreshToken: string): Promise<import("sequelize").Model<any, any> & TokenType>;
    removeToken(refreshToken: string): Promise<number>;
    findToken(refreshToken: string): Promise<(import("sequelize").Model<any, any> & TokenType) | null>;
}
declare const _default: TokenService;
export default _default;
