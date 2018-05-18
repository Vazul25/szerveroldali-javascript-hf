"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//regisztrálás
module.exports = function (objectRepository) {
    return function (req, res, next) {
        var UserModel = requireOption(objectRepository, 'userModel');
        //not enough parameter
        if ((typeof req.body === 'undefined') || (typeof req.body.email === 'undefined') ||
            (typeof req.body.password === 'undefined')) {
            res.tpl.error.push('Email and password must be given!');
            return next();
        }
        //lets find the user
        UserModel.findOne({
            email: req.body.email
        }, function (err, result) {
            if ((err) || (result)) {
                res.tpl.error.push('Your email address is already registered!');
                return next();
            }
            //create user
            var newUser = new UserModel();
            newUser.name = req.body.name;
            newUser.email = req.body.email;
            newUser.password = req.body.password;
            newUser.save(function (err) {
                //redirect to /login
                return res.redirect('/login');
            });
        });
    };
};
