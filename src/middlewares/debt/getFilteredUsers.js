"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Lekéri a tartozásokat részletező oldalhoz a 2 felhasználó közti összes tartozást
var requireOption = require('../generic/checkRepositoryMw').requireOption;
module.exports = function (objectRepository) {
    var userModel = requireOption(objectRepository, 'userModel');
    return function (req, res, next) {
        userModel.find(req.query.filter, function (err, result) {
            if (err) {
                return res.redirect('/home/');
            }
            res.tpl.users = result;
            return next();
        });
    };
};
