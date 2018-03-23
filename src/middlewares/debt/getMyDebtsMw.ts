import {NextFunction, Request, Response} from "express";

//Lekéri a főoldalhoz a tartozásokat

module.exports = function (objectRepository:any) {

    return function (req: Request, res: Response, next: NextFunction) {
        //
        //objectRepository['db'].update
        return next();
    };
}
