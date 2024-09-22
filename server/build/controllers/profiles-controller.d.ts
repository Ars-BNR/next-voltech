import { NextFunction, Request, Response } from "express";
declare class ProfilesController {
    registration(req: Request, res: Response, next: NextFunction): Promise<void | Response<any, Record<string, any>>>;
    login(req: Request, res: Response, next: NextFunction): Promise<Response<any, Record<string, any>> | undefined>;
    logout(req: Request, res: Response, next: NextFunction): Promise<Response<any, Record<string, any>> | undefined>;
    refresh(req: Request, res: Response, next: NextFunction): Promise<Response<any, Record<string, any>> | undefined>;
    getUsers(req: Request, res: Response, next: NextFunction): Promise<void>;
}
declare const _default: ProfilesController;
export default _default;
