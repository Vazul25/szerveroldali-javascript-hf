"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class userModel {
    constructor(db) {
        this.userMock = {
            email: 'mock@gmail.com',
            fullName: "Test Elek",
            id: 0,
            nickName: 'Test',
            birthDay: new Date()
        };
        console.log("db is: " + db);
    }
    findOne(id, cb) {
        return cb(null, this.userMock);
    }
    filter(searchText, cb) {
        let mock = [this.userMock, this.userMock, this.userMock];
        return cb(null, mock);
    }
}
exports.userModel = userModel;
