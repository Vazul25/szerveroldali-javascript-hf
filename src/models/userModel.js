"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var userModel = /** @class */ (function () {
    function userModel(db) {
        //valami db config
    }
    //ezzel kérjük le az adósság részletező oldalhoz a user adatait
    userModel.prototype.findOne = function (id) {
        return { email: 'mock@gmail.com', fullName: "Test Elek", id: 0, nickName: 'Test', birthDay: new Date() };
    };
    userModel.prototype.filter = function (searchText) {
        return [];
    };
    return userModel;
}());
exports.userModel = userModel;
