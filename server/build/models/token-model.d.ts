import { Model } from "sequelize";
import { TokenType } from "../types/type";
declare const TokenModel: import("sequelize").ModelCtor<Model<any, any> & TokenType>;
export default TokenModel;
