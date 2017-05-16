import { User } from './../Models/User';
import { GlobalVariable } from './../const';
import { Injectable, OnInit } from '@angular/core'
import { Headers, Http, Response } from '@angular/http'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/toPromise';

@Injectable()
export class BaseDataService implements OnInit{
    
    public months = ["01月","02月","03月","04月","05月","06月","07月","08月","09月","10月","11月","12月"]
    public yhTypes = ["别墅","车位","公寓","商铺","洋房","全部"]
    date = new Date();
    debugger
    public year = this.date.getFullYear();
    public month = this.date.getMonth()+1<10?"0"+String(this.date.getMonth()+1)+"月":String(this.date.getMonth()+1);
    public day = this.date.getDay();
    private serveradd = GlobalVariable.ServerAddress
    private urlGetUsers = this.serveradd+'user/list';
    private urlInsertUsers = this.serveradd+'user/insert';
    private urlDeleteUser = this.serveradd+'user/delete';
    private handleError(error:any): Promise<any>{
        console.error("BasedataService服务错误:",error);
        return Promise.reject(error.message || error);
    }

    constructor(private http:Http){
    }

    ngOnInit() {
    }

    getUsers():  Promise<Object>{
        return this.http.get(this.urlGetUsers)
                    .toPromise()
                    .then(response => {
                        let userList = [];
                        let Users = response.json();
                        for(let i in Users){
                            var user = new User();
                            user.id =Users[i].uId
                            user.displayName =Users[i].vseusername
                            user.userName =Users[i].username
                            user.count =Users[i].count
                            user.isalive =Users[i].isalive
                            user.isvalid =Users[i].isvalid
                            user.lastLoginDate =Users[i].lastLoginDate
                            user.createDate =Users[i].createDate
                            userList.push(user);
                        }
                        return userList;
                    }
                    )
                    .catch(this.handleError);
    }
    
    deleteUsers(userId): Promise<Object>{
        return this.http.get(this.urlDeleteUser+"?userId="+userId).toPromise().then( response =>
            {
                return response.json() as Object;
            }
        ).catch(this.handleError);
    }

    insertUsers(username,displayname,isvalid){
         return this.http.get(this.urlInsertUsers+"?username="+username+"&displayname="+displayname+"&isvalid="+isvalid)
         .toPromise().then( response =>
            {
                return response.json() as Object;
            }
        ).catch(this.handleError);
    }

    updateUser(User){
        debugger
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
         return this.http.get(this.urlInsertUsers, JSON.stringify(User)
         )
         .map(res=>res.json());
    }


}