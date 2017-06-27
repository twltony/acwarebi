import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'manage-subject',
	templateUrl: 'manage-subject.component.html'
})

export class ManageSubjectComponent implements OnInit {

	ngOnInit() {
		alert(localStorage.getItem("platform")+
		localStorage.getItem("uuid")+
		localStorage.getItem("version")+
		localStorage.getItem("manufacturer")+
		localStorage.getItem("serial")
		)

	}
}