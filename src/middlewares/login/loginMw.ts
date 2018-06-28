import {NextFunction, Request, Response} from "express";
import {UserModel} from "../../models/userModel";
var requireOption = require('../generic/checkRepositoryMw').requireOption;


//beléptetés
module.exports = function (objectRepository:any) {





    return function (req, res, next) {
        console.log("loginmw");
        var userModel:UserModel = requireOption(objectRepository, 'userModel');
        //not enough parameter

        if ((typeof req.body === 'undefined') || (typeof req.body.email === 'undefined') ||
            (typeof req.body.password === 'undefined')) {
            res.tpl.error.push('Email and password must be given!');
            console.log("Email and password must be given! error");
            return next();
        }

        //lets find the user
        userModel.findWithPassword({
            email: req.body.email
        }, function (err, result) {


            if (!result||err) {
                res.tpl.error.push('Your email address is not registered!');
                console.log("Your email address is not registered!");
                return next();
            }

            //check password
            if (result.password !== req.body.password) {
                res.tpl.error.push('Wrong password!');
                console.log("Wrong password! error" );
                return next();
            }
            console.log("login accept "+result._id );
            //login is ok, save id to session
            req.session.userId = result._id;

            //redirect to / so the app can decide where to go next
            return res.redirect('/');

        });

    }
}
