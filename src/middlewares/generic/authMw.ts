import {NextFunction, Request   } from "express";
//login ellenőrzés
import {Response} from "../../typings/MyResponseExtension"
module.exports = function (objectRepository:any) {

    return function (req, res, next) {
        console.log("Authorizing "  )
        if (typeof req.session === 'undefined'||typeof req.session.userId === 'undefined') {

            return res.redirect('/');
        }
        console.log("User "+req.session.userId+" authorized"  );
        return next();
    };
}
