export class userModel{
    private  db:any;
    private  userMock:iUser        =
        {
            email:'mock@gmail.com',
            fullName:"Test Elek",
            id:0,
            nickName:'Test',
            birthDay:new Date()
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

}