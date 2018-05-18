import {NextFunction, Request, Response} from "express";
import {UserModel} from "../../models/userModel";
var requireOption = require('../generic/checkRepositoryMw').requireOption;


//Mobil laborhoz kell tudom hogy tök rossz meg minden
module.exports = function (objectRepository:any) {





    return function (req, res, next) {
        console.log("APILoginmw");
        var userModel:UserModel = requireOption(objectRepository, 'userModel');
        //not enough parameter

        if ((typeof req.body === 'undefined') || (typeof req.body.email === 'undefined') ||
            (typeof req.body.password === 'undefined')) {
            res.tpl.error.push('Email and password must be given!');
            console.log("Email and password must be given! error");
            return res.status(401).json({error:res.tpl.error});
        }

        //lets find the user
        userModel.findWithPassword({
            email: req.body.email
        }, function (err, result) {


            if (!result||err) {
                res.tpl.error.push('Your email address is not registered!');
                console.log("Your email address is not registered!");
                return res.status(401).json({error:res.tpl.error});
            }

            //check password
            if (result.password !== req.body.password) {
                res.tpl.error.push('Wrong password!');
                console.log("Wrong password! error" );
                return res.status(401).json({error:res.tpl.error});
            }
            console.log("login accept "+result._id );


            req.session.userId = result._id.toString();
            return next();

        });

    }
}
