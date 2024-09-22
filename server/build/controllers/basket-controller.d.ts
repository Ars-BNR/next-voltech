import { NextFunction, Request, Response } from "express";
declare class BasketController {
    insertBasket(req: Request, res: Response, next: NextFunction): Promise<void>;
    selectBasket(req: Request, res: Response, next: NextFunction): Promise<void>;
    deleteBasket(req: Request, res: Response, next: NextFunction): Promise<void>;
    decreaseBasket(req: Request, res: Response, next: NextFunction): Promise<void>;
    clearBasket(req: Request, res: Response, next: NextFunction): Promise<void>;
}
declare const _default: BasketController;
export default _default;
