import { User } from 'app/Models/User';
import { Role } from 'app/Models/Role';
import { Component, OnInit } from '@angular/core';
import { BaseDataService } from "app/Services/basedata.service";

@Component({
	selector: 'manage-users',
	templateUrl: 'manage-users.component.html',
	providers: [BaseDataService]
})

export class ManageUsersComponent implements OnInit {
	isProgressShow = false;
	modalsOpened = false;
	modalsEditOpened = false;
	Users;
	Roles;
	lg ='lg';
	user = new User();
	message;
	errormessage;
	isAlertShow;
	isErrorAlertShow;
	constructor(
		private baseDataService: BaseDataService
	) { }
	ngOnInit() {
		this.getUsers();
		this.getAllRoles();
	}
	getUsers() {
		this.baseDataService.getUsers().then(Object => {
			this.Users = Object;
			console.log(this.Users)
		})
	}
	onEdit(user) {
		this.modalsEditOpened = true;
		this.user = user;
		this.getAllRoles();
		
	}
	onDelete(user) {
		this.baseDataService.deleteUsers(user.uId).then(Result => {
			console.log(Result);
			this.getUsers()
		}
		)
	}
	onSubmit() {
		this.isProgressShow = true;
		if (this.isUserExist(this.user._userName)) {
			setTimeout(() => { this.isProgressShow = false }, 1000)
			setTimeout(() => { this.modalsOpened = false }, 1000)
			setTimeout(() => {
				if (confirm("用户已经存在！是否更新用户？")) {
					this.baseDataService.updateUser(this.user).then(response => {
						setTimeout(() => { this.isProgressShow = false }, 1000)
						setTimeout(() => { this.modalsEditOpened = false }, 1000)
						setTimeout(() => { this.getUsers() }, 1000)
						this.message = "成功更新用户";
						this.isAlertShow = true;
						setTimeout(() => this.isAlertShow = false, 3000);
					})
				}
			})
		} else {
			this.baseDataService.insertUsers(this.user._userName, this.user._displayName, this.user._isvalid).then(response => {
				setTimeout(() => { this.isProgressShow = false }, 1000)
				setTimeout(() => { this.modalsOpened = false }, 1000)
				setTimeout(() => { this.getUsers() }, 1000)
				this.message = "成功创建用户";
				this.isAlertShow = true;
				setTimeout(() => this.isAlertShow = false, 3000);
			})
		}
	}
	onSubmitEdit() {
		this.isProgressShow = true;
		this.baseDataService.updateUser(this.user).then(response => {
			setTimeout(() => { this.isProgressShow = false }, 1000)
			setTimeout(() => { this.modalsEditOpened = false }, 1000)
			setTimeout(() => { this.getUsers() }, 1000)
			this.message = "成功更新用户";
			this.isAlertShow = true;
			setTimeout(() => this.isAlertShow = false, 3000);
		}).catch()
	}

	//获取所有角色
	getAllRoles() {
		this.baseDataService.getRoles().then(Object => {
			this.Roles = Object
			if (this.user._roles) {
			for (var i in this.user._roles as any) {
				for(var j in this.Roles){
					if(this.Roles[j].rId === this.user._roles[i].rId){
						this.Roles.splice(j, 1);
					}
				}
				
			}
		}
		})
	}

	isUserExist(_userName) {
		var result = false;
		for (var u in this.Users) {
			if (this.Users[u]._userName == _userName) {
				result = true;
			}
		}
		return result;
	}

	//添加角色
	addRole(r) {
		//添加到用户角色
		this.user._roles.push(r);
		//移除可用的角色
		this.Roles.splice(this.Roles.indexOf(r), 1);
	}

	//移除角色
	removeRole(r) {
		//console.log(this.user._roles.indexOf(r))
		//移除用户的角色
		this.user._roles.splice(this.user._roles.indexOf(r), 1);
		//添加到可用角色
		this.Roles.push(r);
	}
}