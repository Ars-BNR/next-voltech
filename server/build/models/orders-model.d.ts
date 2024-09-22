import { Model } from "sequelize";
import { OrdersType } from "../types/type";
declare const OrdersModel: import("sequelize").ModelCtor<Model<any, any> & OrdersType>;
export default OrdersModel;
