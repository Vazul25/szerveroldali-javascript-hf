
import { iUserModel } from "../model_Interfaces/iUser";
import {UserRepository} from "../Repository/userRepository";
import {iDebtPair} from "../typings/iDebtPair";





export class UserModel {

    private _userRepository: UserRepository ;

    constructor( ) {
        this._userRepository = new UserRepository();
    }


    create (item: iUserModel, callback: (error: any, result: any) => void) {


        this._userRepository.create(item, callback);
    }

    retrieve (callback: (error: any, result: any) => void) {
        this._userRepository.retrieve(callback);
    }

    update (_id: string, item: iUserModel, callback: (error: any, result: any) => void) {

        this._userRepository.findById(_id, (err, res) => {
            if(err) callback(err, res);

            else
                this._userRepository.update(res._id, item, callback);

        });
    }

    delete (_id: string, callback:(error: any, result: any) => void) {
        this._userRepository.delete(_id , callback);
    }

    findById (_id: string, callback: (error: any, result: iUserModel) => void) {
        this._userRepository.findById(_id, callback);
    }
    filter(cond:any,callback:any){
        this._userRepository.find(cond,callback);
    }


}



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