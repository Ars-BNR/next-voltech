import { NextFunction, Request, Response } from "express";
declare class OrdersController {
    insertOrders(req: Request, res: Response, next: NextFunction): Promise<void>;
    selectOrders(req: Request, res: Response, next: NextFunction): Promise<void>;
    selectAllOrders(req: Request, res: Response, next: NextFunction): Promise<void>;
    changeStatusOrder(req: Request, res: Response, next: NextFunction): Promise<void>;
    CancelStatusUser(req: Request, res: Response, next: NextFunction): Promise<void>;
    deleteOrder(req: Request, res: Response, next: NextFunction): Promise<void>;
    selectOrderById(req: Request, res: Response, next: NextFunction): Promise<void>;
}
declare const _default: OrdersController;
export default _default;
