import { User } from 'app/Models/User';
import { Component, OnInit } from '@angular/core';
import { BaseDataService } from "app/Services/basedata.service";

@Component({
	selector: 'manage-users',
	templateUrl: 'manage-users.component.html',
	providers:[BaseDataService]
})

export class ManageUsersComponent implements OnInit {
	isProgressShow = false;
	modalsOpened = false;
	modalsEditOpened = false;
	Users;
	user = new User();
	constructor(
		private baseDataService: BaseDataService
	){}
	ngOnInit() { 
		this.getUsers();
	}
	getUsers(){
		this.baseDataService.getUsers().then( Object => {
			 this.Users = Object;
		})
	}
	onEdit(user){
		this.modalsEditOpened = true;
		this.user = user;
	}
	onDelete(user){
		this.baseDataService.deleteUsers(user.id).then( Result =>{
			console.log(Result);
			this.getUsers()
		}
		)
	}
	onSubmit(){
		this.isProgressShow = true;
		this.baseDataService.insertUsers(this.user.userName,this.user.displayName,this.user.isvalid).then(response =>{
			setTimeout(()=>{ this.isProgressShow = false }, 1000)
			setTimeout(()=>{ this.modalsOpened = false }, 1000)
			setTimeout(()=>{ this.getUsers() }, 1000)
			console.log(response);
		})
	}
	onSubmitEdit(){
		this.isProgressShow = true;
		this.baseDataService.updateUser(this.user).map(response =>{
			setTimeout(()=>{ this.isProgressShow = false }, 1000)
			setTimeout(()=>{ this.modalsOpened = false }, 1000)
			setTimeout(()=>{ this.getUsers() }, 1000)
			console.log(response);
		})
	}
}