import { UserSchemaModel} from "../models/userSchema";
import {RepositoryBase} from "./RepositoryBase";
import {iUserModel} from "../model_Interfaces/iUser";

export class UserRepository extends RepositoryBase<iUserModel> {
    constructor() {
        super(UserSchemaModel);
    }
}

Object.seal(UserRepository);