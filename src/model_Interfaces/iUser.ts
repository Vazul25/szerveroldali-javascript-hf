import {Document} from "mongoose";

export interface iUser{
    _id: any;
    fullName:string;
    nickName:string;
    email:string;
    password:String,
    birthday:Date;

}
export interface iUserModel extends iUser, Document {
    createdAt: Date;
}