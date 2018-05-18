"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
module.exports = function (objectRepository) {
    return function (req, res, next) {
        console.log("inverseauth");
        if (typeof req.session.userId !== 'undefined') {
            return res.redirect('/');
        }
        return next();
    };
};
