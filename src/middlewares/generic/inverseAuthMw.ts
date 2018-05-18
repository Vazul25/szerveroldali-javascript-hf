import {NextFunction, Request, Response} from "express";
//Ellenörzi hogy a felhasználó nincs bejelentkezve az oldalon
module.exports = function (objectRepository:any) {

    return function (req, res, next) {
        console.log("inverseauth");
        if (typeof req.session.userId !== 'undefined') {
            return res.redirect('/');
        }
        return next();
    };
}
