import {NextFunction, Request, Response} from "express";
//regisztrálás
module.exports = function (objectRepository:any) {

    return function (req: Request, res: Response, next: NextFunction) {
        return next();
    };
}
