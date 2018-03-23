"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class userModel {
    constructor(db) {
    }
    findOne(id) {
        return { email: 'mock@gmail.com', fullName: "Test Elek", id: 0, nickName: 'Test', birthDay: new Date() };
    }
    filter(searchText) {
        return [];
    }
}
exports.userModel = userModel;
