"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
module.exports = function (objectRepository) {
    return function (req, res, next) {
        if (typeof req.session.userid === 'undefined') {
            return res.redirect('/');
        }
        return next();
    };
};
