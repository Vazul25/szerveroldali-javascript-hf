
import {UserSchemaModel} from "../../models/userSchema";

import {DebtSchemaModel} from "../../models/debtSchema";
function seed() {

    ///MOCKING


    let newDebt1=new DebtSchemaModel();
    let newDebt2=new DebtSchemaModel();
    let newDebt3=new DebtSchemaModel();
    let newDebt4=new DebtSchemaModel();
    let newDebt5=new DebtSchemaModel();
    let newDebt6=new DebtSchemaModel();
    let newDebt7=new DebtSchemaModel();
    let newDebt8=new DebtSchemaModel();
    let newUser = new UserSchemaModel();
    let newUser2 = new UserSchemaModel();

    newUser.email = "Test10@gmail.com";
    newUser.fullName = "TESTER BÉLA";
    newUser.purl="https://i.pinimg.com/originals/f5/9b/1b/f59b1b0cc430702e82dea90780d7f87d.gif";
    newUser.createdAt = new Date();
    newUser.password = "123456";



    newUser2.email = "SEST10@gmail.com";
    newUser2.fullName = "SESTER Ancsin";
    newUser2.purl= "https://vignette.wikia.nocookie.net/austinally/images/1/14/Random_picture_of_shark.png/revision/latest?cb=20150911004230";
    newUser2.createdAt = new Date();
    newUser2.password = "123456";


    newUser.save();
    newUser2.save();

    newDebt1.debtor=newUser;
    newDebt1.debtee=newUser2;
    newDebt1.sum=250;
    newDebt1.state=0;
    newDebt1.comment="Bevesárlás";

    newDebt2.debtor=newUser;
    newDebt2.debtee=newUser2;
    newDebt2.sum=450;
    newDebt2.state=0;
    newDebt2.comment="Bevesárlás";

    newDebt3.debtor=newUser2;
    newDebt3.debtee=newUser;
    newDebt3.sum=350;
    newDebt3.state=0;
    newDebt3.comment="Bevesárlás";

    newDebt4.debtor=newUser;
    newDebt4.debtee=newUser2;
    newDebt4.sum=550;
    newDebt4.state=1;
    newDebt4.comment="Bevesárlás";

    newDebt5.debtor=newUser;
    newDebt5.debtee=newUser2;
    newDebt5.sum=650;
    newDebt5.state=1;
    newDebt5.comment="Bevesárlás";



    newDebt6.debtor=newUser2;
    newDebt6.debtee=newUser;
    newDebt6.sum=2530;
    newDebt6.state=1;
    newDebt6.comment="Bevesárlás";

    newDebt7.debtor=newUser2;
    newDebt7.debtee=newUser;
    newDebt7.sum=1150;
    newDebt7.state=2;
    newDebt7.comment="Bevesárlás";

    newDebt8.debtor=newUser;
    newDebt8.debtee=newUser2;
    newDebt8.sum=150;
    newDebt8.state=2;
    newDebt8.comment="Bevesárlás";



    newDebt1.save();
    newDebt2.save();
    newDebt3.save();
    newDebt4.save();
    newDebt5.save();
    newDebt6.save();
    newDebt7.save();
    newDebt8.save();

    console.log("Seed done");
}