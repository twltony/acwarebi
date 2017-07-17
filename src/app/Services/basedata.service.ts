import { RequestOptions } from 'popsicle';
import { User } from './../Models/User';
import { Role } from './../Models/Role';
import { GlobalVariable } from './../const';
import { Injectable, OnInit } from '@angular/core'
import { Headers, Http, Response } from '@angular/http'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/toPromise';

@Injectable()
export class BaseDataService implements OnInit {

    public months = ["01月", "02月", "03月", "04月", "05月", "06月", "07月", "08月", "09月", "10月", "11月", "12月"]
    public yhTypes = ["别墅", "车位", "公寓", "商铺", "洋房", "全部"]
    date = new Date();
    debugger
    public year = this.date.getFullYear();
    public month = this.date.getMonth() + 1 < 10 ? "0" + String(this.date.getMonth() + 1) + "月" : String(this.date.getMonth() + 1);
    public day = this.date.getDay();
    private serveradd = GlobalVariable.ServerAddress
    private urlGetUsers = this.serveradd + 'user/list';
    private urlGetRoles = this.serveradd + 'role/list';
    private urlInsertUsers = this.serveradd + 'user/insert';
    private urlDeleteUser = this.serveradd + 'user/delete';
    private urlUpdateUser = this.serveradd + 'user/update';
    private handleError(error: any): Promise<any> {
        console.error("BasedataService服务错误:", error);
        return Promise.reject(error.message || error);
    }

    private headers: Headers;

    constructor(private http: Http) {
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/x-www-form-urlencoded');
    }

    ngOnInit() {
    }

    getUsers(): Promise<Object> {
        return this.http.get(this.urlGetUsers)
            .toPromise()
            .then(response => {
                let userList = [];
                let Users = response.json();
                for (let i in Users) {
                    var user = new User();
                    user._id = Users[i].uId
                    user._displayName = Users[i].vseusername
                    user._userName = Users[i].username
                    user._count = Users[i].count
                    user._isalive = Users[i].isalive
                    user._isvalid = Users[i].isvalid
                    user._lastLoginDate = Users[i].lastLoginDate
                    user._createDate = Users[i].createDate

                    if (Users[i].role) {
                        let roleList = [];
                        var roles = Users[i].role;
                        for (let r in roles) {
                            var role = new Role();
                            role.$rId = roles[r].rId;
                            role.$roleName = roles[r].roleName;
                            role.$descriptions = roles[r].descriptions;
                            roleList.push(role)
                        }
                        user._roles = roleList;
                    }
                    userList.push(user);
                }
                console.log(response);
                console.log(userList)
                return userList;

            }
            )
            .catch(this.handleError);
    }

    getRoles(): Promise<Object>{
        return this.http.get(this.urlGetRoles).toPromise().then(response => {
            return response.json() as Object;
        }).catch(this.handleError);
    }

    deleteUsers(userId): Promise<Object> {
        return this.http.get(this.urlDeleteUser + "?userId=" + userId).toPromise().then(response => {
            return response.json() as Object;
        }
        ).catch(this.handleError);
    }

    insertUsers(username, displayname, isvalid) {
        return this.http.get(this.urlInsertUsers + "?username=" + username + "&displayname=" + displayname + "&isvalid=" + isvalid)
            .toPromise().then(response => {
                return response.json() as Object;
            }
            ).catch(this.handleError);
    }

    updateUser(User) {
        debugger
        var headers = new Headers();
        console.log("JSON.stringify(User.toString()):" + JSON.stringify(User))
        console.log("User.toString():" + User.toString())
        var body = new URLSearchParams();
        body.append("user", JSON.stringify(User));

        headers.append('Content-Type', 'application/json');
        return this.http.post(this.urlUpdateUser, body.toString(), { headers: this.headers })
            .toPromise()
            .then(response => {
                return response.json() as Object
            }
            )
            .catch(this.handleError);
    }


}