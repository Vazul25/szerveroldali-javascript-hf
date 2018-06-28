import {NextFunction, Request, Response} from "express";
import {UserModel} from "../../models/userModel";
import {UserSchemaModel} from "../../models/userSchema";

var requireOption = require('../generic/checkRepositoryMw').requireOption;
//regisztrálás
module.exports = function (objectRepository:any,breakOnError:boolean=false,noRedirect:boolean=false) {

    return function (req, res, next) {


        var userModel: UserModel = requireOption(objectRepository, 'userModel');
        //not enough parameter
        if ((typeof req.body === 'undefined') || (typeof req.body.email === 'undefined') ||
            (typeof req.body.password === 'undefined')) {
            res.tpl.error.push('Email and password must be given!');
            if (breakOnError)
                return res.status(400).json({error:res.tpl.error})  ;
            return next();
        }

        //lets find the user
        userModel.findOne({
            email: req.body.email
        }, function (err, result) {

            if ((err) || (result)) {
                res.tpl.error.push('Your email address is already registered!');
                if (breakOnError)
                    return res.status(400).json({error:res.tpl.error})  ;
                return next();
            }


            let newUser = new UserSchemaModel();

            newUser.email = req.body.email;
            newUser.fullName = req.body.name;
            newUser.purl=req.body.purl;
            newUser.createdAt = new Date();
            newUser.password = req.body.password;

            userModel.create(newUser, function (err, result) {


                console.log("User " + newUser.email + " created!");
                if(noRedirect) return next();
                return res.redirect('/login');
            });


        });
    }
}