"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const userSchema_1 = require("../models/userSchema");
const RepositoryBase_1 = require("./RepositoryBase");
class UserRepository extends RepositoryBase_1.RepositoryBase {
    constructor() {
        super(userSchema_1.UserSchemaModel);
    }
}
exports.UserRepository = UserRepository;
Object.seal(UserRepository);
