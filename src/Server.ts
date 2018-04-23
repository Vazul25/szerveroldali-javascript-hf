import * as bodyParser from "body-parser";
import * as cookieParser from "cookie-parser";
import * as express from "express";
import * as path from "path";
import { NextFunction, Request,Response, Router } from "express";

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
        console.log( __dirname );
        console.log( path.join(__dirname, "../static") );

        this.app.use(bodyParser.json());
        this.app.set("views", path.join(__dirname, "../views"));
        console.log( path.join(__dirname, "../views"));
        this.app.set("view engine", "ejs");

        this.app.use(bodyParser.urlencoded({
            extended: true
        }));

        //use cookie parser middleware
        this.app.use(cookieParser("SECRET_GOES_HERE"));
        this.app.use(function (req:Request,res:Response,next:NextFunction) {
            res.tpl={};
            res.error=[];
            return next();

        });
        this.app.use(function (error:Error,req:Request,res:Response,next:NextFunction) {
            res.sendStatus(500);


            console.error(error.stack);

        });
    }


}

