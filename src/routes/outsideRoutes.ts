import * as express from "express";
import {UserModel} from "../models/userModel";

module.exports = function (app: express.Application) {
    var objrep = {
        userModel: new UserModel()
    };

    var loginMw=require("../middlewares/login/loginMw");
    var registerMw=require("../middlewares/login/registerMw");
    var redirect=require("../middlewares/generic/mainredirectMw");
    var renderMw=require("../middlewares/generic/renderMw");
    var inverseAuthMw=require("../middlewares/generic/inverseAuthMw");
    var apiAuthMw=require("../middlewares/generic/apiAuthMw");
    var sendStatus=require("../middlewares/generic/sendStatus");
    app.get('/Register', inverseAuthMw(objrep), renderMw(objrep, 'Register'));
   // app.get('/Login', inverseAuthMw(objrep), renderMw(objrep, 'Login'));
    app.post('/Register', inverseAuthMw(objrep),  registerMw(objrep), renderMw(objrep, 'Register'));
    app.post('/Api/Register', registerMw(objrep,true,true), sendStatus(200));
    //app.post('/Login', inverseAuthMw(objrep), loginMw(objrep)), renderMw(objrep, 'Login');
    app.use('/Login', inverseAuthMw(objrep), loginMw(objrep), renderMw(objrep, 'Login'));
    app.use('/Api/Login', apiAuthMw(objrep),   sendStatus(200));

    app.get('/',redirect(objrep) );

}