import { NextFunction, Request, Response } from "express";
export type ApiErrorType = {
    status: number;
    message: string;
    errors: string[];
};
export default function (err: ApiErrorType, req: Request, res: Response, next: NextFunction): Response<any, Record<string, any>>;
