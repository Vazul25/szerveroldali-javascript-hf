
import * as express from 'express'

declare module 'express' {
    interface Response {
        tpl: any;
        error:any;
    }
}