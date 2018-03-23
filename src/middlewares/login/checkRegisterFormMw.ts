import {NextFunction, Request, Response} from "express";
//regisztrációnál megadott adat ellenörzése
module.exports = function (objectRepository:any) {

    return function (req: Request, res: Response, next: NextFunction) {
        return next();
    };
}
