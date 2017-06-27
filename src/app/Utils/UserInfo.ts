export class UserInfo{

    constructor(){}

    checkUserInfo():any{
        if(
            localStorage.getItem("loginname")
        ){
            return true;
        }else{
            return false;
        }
    }
}