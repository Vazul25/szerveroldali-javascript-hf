import {NextFunction, Request, Response} from "express";

//ellenőrzi hogy megfelelő a formátuma a kiirandó adósségoknak

module.exports = function (objectRepository:any) {

    return function (req: Request, res: Response, next: NextFunction) {

        return next();
    };
}
