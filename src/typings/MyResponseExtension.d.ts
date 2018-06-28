
import * as express from 'express'


    interface Response extends express.Response {
        tpl: any;
        error:any;
    }
