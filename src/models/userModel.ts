export class userModel{
    private  db:any;
    constructor(db:any){
        //valami db config

    }
    //ezzel kérjük le az adósság részletező oldalhoz a user adatait
    public  findOne(id:number):iUser{
        return {email:'mock@gmail.com',fullName:"Test Elek",id:0,nickName:'Test',birthDay:new Date()}
    }
    public  filter(searchText:string):iUser[]{
        return [];
    }

}