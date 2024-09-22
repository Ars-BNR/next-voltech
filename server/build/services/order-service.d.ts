import { OrdersType } from "../types/type";
declare class OrderService {
    insertOrders(order: OrdersType): Promise<import("sequelize").Model<any, any> & OrdersType>;
    getByUserId(id: number): Promise<(import("sequelize").Model<any, any> & OrdersType)[]>;
    getAll(): Promise<(import("sequelize").Model<any, any> & OrdersType)[]>;
    updateStatus(id_order: string, status: string): Promise<import("sequelize").Model<any, any> & OrdersType>;
    CancelStatusUser(id_order: string): Promise<import("sequelize").Model<any, any> & OrdersType>;
    delete(id_order: string): Promise<{
        message: string;
    }>;
    getById(id: string): Promise<import("sequelize").Model<any, any> & OrdersType>;
}
declare const _default: OrderService;
export default _default;
