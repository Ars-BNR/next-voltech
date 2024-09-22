import { Model } from "sequelize";
import { BasketType } from "../types/type";
declare const BasketModel: import("sequelize").ModelCtor<Model<any, any> & BasketType>;
export default BasketModel;
