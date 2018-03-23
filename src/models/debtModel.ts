export class debtModel{
    constructor(db:any){
        //valami db config

    }
    //visssza adja a felhasználók közt fenálló tartozásokat
    public  getAllDebtBetweenUsesrs(userId1:number,userId2:number):iDebt[]{
        return [
            {
                comment:"Bevásárlás",date:new Date(),
                debtee:{email:'mock@gmail.com',fullName:"Test Elek",id:0,nickName:'Test',birthDay:new Date()},
                debtor:{email:'mock2@gmail.com',fullName:"Test Elek2",id:1,nickName:'Test2',birthDay:new Date()},
                id:1,
                price:2500,
                state:0
            },
            {
                comment:"Bevásárlás",date:new Date(),
                debtee:{email:'mock@gmail.com',fullName:"Test Elek",id:0,nickName:'Test',birthDay:new Date()},
                debtor:{email:'mock2@gmail.com',fullName:"Test Elek2",id:1,nickName:'Test2',birthDay:new Date()},
                id:1,
                price:250,
                state:0
            },
            {
                comment:"Bevásárlás",date:new Date(),
                debtee:{email:'mock@gmail.com',fullName:"Test Elek",id:0,nickName:'Test',birthDay:new Date()},
                debtor:{email:'mock2@gmail.com',fullName:"Test Elek2",id:1,nickName:'Test2',birthDay:new Date()},
                id:1,
                price:3250,
                state:2
            }]
    }
    //új tartozás létrehozásához
    public addDebt(newDebt:iDebt):void {

    }
    //több új tartoás létrehozásához
    public addAllDebt(newDebts:iDebt[]):void{

    }
    //jóváhagyja a rendezéseket
    public approveSettleDebts(debtIds:number[]):void{}

    //rendezés elküldése jóváhagyásra
    public settleDebts(debtIds:number[]):void{}

    //jóváhagyásra váró adósság rendezések lekérése
    public getSettledDebtsForApprove(userId:number):iDebt[]{
        return [
            {
                comment:"Bevásárlás",date:new Date(),
                debtee:{email:'mock@gmail.com',fullName:"Test Elek",id:0,nickName:'Test',birthDay:new Date()},
                debtor:{email:'mock2@gmail.com',fullName:"Test Elek2",id:1,nickName:'Test2',birthDay:new Date()},
                id:1,
                price:250,
                state:1
            },
            { comment:"Bevásárlás",date:new Date(),debtee:null,debtor:null,id:1,price:2540,state:1},
            { comment:"Bevásárlás",date:new Date(),debtee:null,debtor:null,id:1,price:2500,state:1},
        ]
    }

}