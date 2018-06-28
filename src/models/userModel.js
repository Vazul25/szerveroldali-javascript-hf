"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var userRepository_1 = require("../Repository/userRepository");
var UserModel = /** @class */ (function () {
    function UserModel() {
        this._userRepository = new userRepository_1.UserRepository();
    }
    UserModel.prototype.create = function (item, callback) {
        this._userRepository.create(item, callback);
    };
    UserModel.prototype.retrieve = function (callback) {
        this._userRepository.retrieve(callback);
    };
    UserModel.prototype.update = function (_id, item, callback) {
        var _this = this;
        this._userRepository.findById(_id, function (err, res) {
            if (err)
                callback(err, res);
            else
                _this._userRepository.update(res._id, item, callback);
        });
    };
    UserModel.prototype.delete = function (_id, callback) {
        this._userRepository.delete(_id, callback);
    };
    UserModel.prototype.findById = function (_id, callback) {
        this._userRepository.findById(_id, callback);
    };
    UserModel.prototype.find = function (cond, callback) {
        this._userRepository.find(cond, callback);
    };
    UserModel.prototype.findOne = function (cond, callback) {
        this._userRepository.findOne(cond, callback);
    };
    return UserModel;
}());
exports.UserModel = UserModel;
/*

export class userModel{
    private  _userModel:iUserModel
    private  db:any;
    private  userMock:iUser        =
        {
            email:'mock@gmail.com',
            fullName:"Test Elek",
            _id:0,
            nickName:'Test',
            birthDay:new Date(),
            password:"AsDasd"
        };
    constructor(db:any){
        //valami db config
        console.log("db is: "+db);
    }
    //ezzel kérjük le az adósság részletező oldalhoz a user adatait
    public  findOne(id:number,cb:(err:iErrorObject,result:any)=>any):iUser{
        return cb(null,this.userMock);
    }
    public  filter(searchText:string,cb:(err:iErrorObject,result:any)=>any):iUser[]{
        let mock=[ this.userMock, this.userMock, this.userMock];
        return cb(null,mock);
    }

}*/ 
