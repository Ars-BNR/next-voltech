import { NextFunction, Request, Response } from "express";
export default function (roleRequired: string): (req: Request, res: Response, next: NextFunction) => Response<any, Record<string, any>> | undefined;
