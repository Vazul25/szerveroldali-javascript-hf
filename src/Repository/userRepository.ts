import { UserSchemaModel} from "../models/userSchema";
import {RepositoryBase} from "./RepositoryBase";
import {iUserModel} from "../model_Interfaces/iUser";

export class UserRepository extends RepositoryBase<iUserModel> {
    constructor() {
        super(UserSchemaModel);
    }
    find (cond: any, callback: (error: any, result: iUserModel) => void) {
        this._model.find( cond,  { password:0}, callback);
    }

    findById (_id: string, callback: (error: any, result: iUserModel) => void) {
        this._model.findById( _id, { password:0}, callback);
    }
    findOne (cond: any, callback: (error: any, result: iUserModel) => void) {
        this._model.findOne( cond,{ password:0},  callback);
    }
    findByEmailWithPassword (cond: any, callback: (error: any, result: iUserModel) => void) {
        this._model.findOne( cond,   callback);
    }
}

Object.seal(UserRepository);