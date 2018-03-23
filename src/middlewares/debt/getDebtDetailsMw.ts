import {NextFunction, Request, Response} from "express";

//Lekéri a tartozásokat részletező oldalhoz a 2 felhasználó közti összes tartozást

module.exports = function (objectRepository:any) {

    return function (req: Request, res: Response, next: NextFunction) {
        //
        //objectRepository['db'].update
        return next();
    };
}
