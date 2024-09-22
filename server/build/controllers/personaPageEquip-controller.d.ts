import { NextFunction, Request, Response } from "express";
declare class PersonaPageEquipController {
    getEquipmentsById(req: Request, res: Response, next: NextFunction): Promise<void>;
}
declare const _default: PersonaPageEquipController;
export default _default;
