import { BaseDataService } from '../../../Services/basedata.service';
import { Component, OnInit } from '@angular/core';
import { Role } from "app/Models/Role";

@Component({
    selector: 'manage-role',
    templateUrl: 'manage-role.component.html'
})

export class ManageRoleComponent implements OnInit {
    Roles;
    role = new Role();
    modalsEditOpened = false;
    modalsOpened = false;
    isProgressShow = false;
    isAlertShow = false;
    message;

    constructor(
        private baseDataService: BaseDataService
    ) { }

    ngOnInit() {
        this.getRoles();
    }

    getRoles() {
        this.baseDataService.getRoles().then(Object => {
            this.Roles = Object
            console.log(this.Roles)
        })
    }

    onEdit(role) {
        this.modalsEditOpened = true;
        this.role = role;
    }

    onSubmitEdit() {
        this.isProgressShow = true;
        this.baseDataService.updateRole(this.role).then(response => {
            setTimeout(() => { this.isProgressShow = false }, 1000)
            setTimeout(() => { this.modalsEditOpened = false }, 1000)
            setTimeout(() => { this.getRoles() }, 1000)
            this.message = "成功更新用户";
            this.isAlertShow = true;
            setTimeout(() => this.isAlertShow = false, 3000);
        }).catch()
    }

    onSubmit() {
        this.isProgressShow = true;
        var body = new URLSearchParams();
        body.append("roleName", this.role.$roleName);
        body.append("roleDescription", this.role.$descriptions);

        this.baseDataService.insertRole(body).then(response => {
            setTimeout(() => { this.isProgressShow = false }, 1000)
            setTimeout(() => { this.modalsOpened = false }, 1000)
            setTimeout(() => { this.getRoles() }, 1000)
            this.message = "成功创建角色";
            this.isAlertShow = true;
            setTimeout(() => this.isAlertShow = false, 3000);
        })

    }

    onDelete(role) {
        this.baseDataService.deleteRole(role.rId).then(Result => {
            console.log(Result);
            this.getRoles()
        }
        )
    }

}