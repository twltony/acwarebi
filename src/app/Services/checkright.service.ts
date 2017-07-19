import { GlobalVariable } from '../const';
import { Http, Headers } from '@angular/http';
import { BaseDataService } from './basedata.service';

import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { User } from "app/Models/User";

@Injectable()
export class CheckRightService {
    public marketingRight = false;
    public costingRight = false;
    public tenderRight = false;
    public managermentRight = false;
    public propertyRight = false;
    public hrRight = false;
    public userInfo;
    private headers: Headers;

    private serveradd = GlobalVariable.ServerAddress
    private urlGetUserByName = this.serveradd + 'user/selectByUserName';

    constructor(private baseDataService: BaseDataService,
        private router: Router,
        private http: Http
    ) {
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/x-www-form-urlencoded');
    }

    checkUserRights(userName) {
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
                this.userInfo = user;
                //遍历角色
                let username = localStorage.getItem("currentUser");
                if (user._roles) {
                    for (var i in user._roles as any) {
                        if (user._roles[i].rId ==="1" ) {
                            this.marketingRight = true;
                        } else if (user._roles[i].rId ==="2" ) {
                            this.costingRight = true
                        } else if (user._roles[i].rId ==="3" ) {
                            this.tenderRight = true
                        } else if (user._roles[i].rId ==="99" ) {
                            this.managermentRight = true
                        } else if (user._roles[i].rId ==="89D5") {
                            this.propertyRight = true
                        }else if (user._roles[i].rId === "1609") {
                            this.hrRight = true
                        }
                    }
                }
                return true;
            }
            )

    }

    removeAllRights() {
        this.marketingRight = false;
        this.costingRight = false;
        this.tenderRight = false;
        this.managermentRight = false;
        this.propertyRight = false;
        this.hrRight = false;
    }

}