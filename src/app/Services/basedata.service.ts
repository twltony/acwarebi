import { RequestOptions } from 'popsicle';
import { User } from './../Models/User';
import { Role } from './../Models/Role';
import { GlobalVariable } from './../const';
import { Injectable, OnInit } from '@angular/core'
import {URLSearchParams, Headers,  Http,  Response} from '@angular/http';
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
    private urlAccessLog = this.serveradd + 'user/accessLog';
    private urlGetAccessLog = this.serveradd + 'user/listAccessLogs';
    private urlGetUserByName = this.serveradd + 'user/selectByUserName';
    private urlGetRoles = this.serveradd + 'role/list';
    private urlInsertUsers = this.serveradd + 'user/insert';
    private urlDeleteUser = this.serveradd + 'user/delete';
    private urlUpdateUser = this.serveradd + 'user/update';
    private urlDeleteRole = this.serveradd + 'role/delete';
    private urlUpdateRole = this.serveradd + 'role/update';
    private urlInsertRole = this.serveradd + 'role/insert';
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

    accessLog(username, subject) {
        var body = new URLSearchParams();
        body.append("username", username);
        body.append("platform", localStorage.getItem("platform"));
        body.append("uuid", localStorage.getItem("uuid"));
        body.append("subject", subject);
        return this.http.post(this.urlAccessLog, body.toString(), { headers: this.headers }).toPromise()
            .then(response => {

            })
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
                            var role = new Object as any;
                            role.rId = roles[r].rId;
                            role.roleName = roles[r].roleName;
                            role.descriptions = roles[r].descriptions;
                            role.user = roles[r].user
                            roleList.push(role)
                        }
                        user._roles = roleList;
                    }
                    userList.push(user);
                }
                return userList;

            }
            )
            .catch(this.handleError);
    }

    getUserByName(userName) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        var body = new URLSearchParams();
        body.append("userName", userName);


        return this.http.post(this.urlGetUserByName, body.toString(), { headers: this.headers })
            .toPromise()
            .then(response => {
                var data = response.json() as any;
                var user = new User();
                user._id = data.uId;
                user._displayName = data.vseusername
                user._userName = data.username
                user._count = data.count
                user._isalive = data.isalive
                user._isvalid = data.isvalid
                user._lastLoginDate = data.lastLoginDate
                user._createDate = data.createDate

                if (data.role) {
                    let roleList = [];
                    var roles = data.role;
                    for (let r in roles) {
                        var role = new Object as any;
                        role.rId = roles[r].rId;
                        role.roleName = roles[r].roleName;
                        role.descriptions = roles[r].descriptions;
                        role.user = roles[r].user
                        roleList.push(role)
                    }
                    user._roles = roleList;
                }
                return user;

            }
            )
            .catch(this.handleError);

    }

    getRoles(): Promise<Object> {
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
        var headers = new Headers();
        var body = new URLSearchParams();
        body.append("user", JSON.stringify(User));

        headers.append('Content-Type', 'application/json');
        return this.http.post(this.urlUpdateUser, body.toString(), { headers: this.headers })
            .toPromise()
            .then(response => {
                return response as Object
            }
            )
            .catch(this.handleError);
    }


    deleteRole(roleId): Promise<Object> {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        var body = new URLSearchParams();
        body.append("roleId", roleId);

        return this.http.post(this.urlDeleteRole, body.toString(), { headers: this.headers }).toPromise().then(response => {
            return response.json() as Object;
        }
        ).catch(this.handleError);
    }

    insertRole(body) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');

        return this.http.post(this.urlInsertRole, body.toString(), { headers: this.headers }).toPromise().then(response => {
            return response.json() as Object;
        }
        ).catch(this.handleError);
    }

    updateRole(role) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        var body = new URLSearchParams();
        body.append("role", JSON.stringify(role))

        return this.http.post(this.urlUpdateRole, body.toString(), { headers: this.headers })
            .toPromise()
            .then(response => {
                return response as Object
            }
            )
            .catch(this.handleError);
    }

    clickMarketing(username) {
        if (username == "管理员") {
            return;
        }
        this.accessLog(username, "营销主题");
    }
    clickCosting(username) {
        if (username == "管理员") {
            return;
        }
        this.accessLog(username, "成本主题");
    }
    clickTendering(username) {
        if (username == "管理员") {
            return;
        }
        this.accessLog(username, "招标主题");
    }
    clickHumanResources(username) {
        if (username == "管理员") {
            return;
        }
        this.accessLog(username, "人力主题");
    }
    clickProperty(username) {
        if (username == "管理员") {
            return;
        }
        this.accessLog(username, "物业主题");
    }
    clickManagement(username) {
        if (username == "管理员") {
            return;
        }
        this.accessLog(username, "管理页面");
    }

    getAccessLogs(){
         return this.http.get(this.urlGetAccessLog)
            .toPromise()
            .then(response => {
                return response.json();
            }
            )
    }
}