"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
module.exports = function (objectRepository) {
    return function (req, res, next) {
        console.log("Authorizing ");
        if (typeof req.session === 'undefined' || typeof req.session.userId === 'undefined') {
            return res.redirect('/');
        }
        console.log("User " + req.session.userId + " authorized");
        return next();
    };
};
