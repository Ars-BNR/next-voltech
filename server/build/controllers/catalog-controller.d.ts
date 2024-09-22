import { NextFunction, Request, Response } from "express";
declare class CatalogController {
    allitems(req: Request, res: Response, next: NextFunction): Promise<void>;
    getBrands(req: Request, res: Response, next: NextFunction): Promise<void>;
    getImg(req: Request, res: Response, next: NextFunction): void;
    createItem(req: Request, res: Response, next: NextFunction): Promise<void>;
}
declare const _default: CatalogController;
export default _default;
