var bodyParser = require('body-parser');
import * as cookieParser from "cookie-parser";
import * as express from "express";
import * as path from "path";
import { NextFunction, Request,  Router } from "express";
var session = require('express-session');

import {Response} from "./typings/MyResponseExtension"

export class Server {

    public app: express.Application;
    public  routes:any;

    public static bootstrap(): Server {
        return new Server();
    }

    constructor() {
        //create expressjs application
        this.app = express();
        //configure application
        this.config();

        require('./routes/debtRoutes')(this.app);
        require('./routes/outsideRoutes')(this.app);

    }

    public config() {

        this.app.use(express.static( path.join(__dirname, "../static")));


        // for parsing application/json
        this.app.use(bodyParser.json());
        // for parsing application/x-www-form-urlencoded
        this.app.use(bodyParser.urlencoded({
            extended: true
        }));
        this.app.set("views", path.join(__dirname, "../views"));

        this.app.set("view engine", "ejs");

        /* this.app.use(bodyParser.urlencoded({
             extended: true
         }));*/

        //use cookie parser middleware
        this.app.use(session({
            secret: 'keyboard cat',
            cookie: {
                maxAge: 1 * 1 * 30 * 60 * 1000
            },
            resave: true,
            saveUninitialized: false
        }));

        this.app.use(function (req:Request,res:Response,next:NextFunction) {
            res.tpl={};
            res.error=[];
            res.tpl.error=[];
            return next();

        });
        this.app.use(function (error:Error,req:Request,res:Response,next:NextFunction) {
            res.sendStatus(500);


            console.error(error.stack);

        });
    }


}

