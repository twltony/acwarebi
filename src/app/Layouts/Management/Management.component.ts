import { BaseDataService } from './../../Services/basedata.service';
import { Component, OnInit } from '@angular/core';
import { CheckRightService } from "app/Services/checkright.service";

@Component({
	selector: 'Management',
	templateUrl: 'Management.component.html',
	styleUrls: ['Management.component.css'],
	providers: [BaseDataService]
})

export class ManagementComponent implements OnInit {
	constructor(private baseDataService:BaseDataService,
				private checkRightService:CheckRightService){}
	ngOnInit() {
		this.baseDataService.clickManagement(localStorage.getItem('currentUser'))

	}
}