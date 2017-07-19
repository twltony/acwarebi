import { BaseDataService } from '../../Services/basedata.service';
import { Component, OnInit } from '@angular/core';
import { CheckRightService } from "app/Services/checkright.service";

@Component({
	selector: 'HumanResources',
	templateUrl: 'HumanResources.component.html',
	styleUrls: ['HumanResources.component.css']
})

export class HumanResourcesComponent implements OnInit {
	constructor(
		private baseDataService: BaseDataService,
		private checkRightService: CheckRightService) { }
	ngOnInit() {
		this.baseDataService.clickHumanResources(localStorage.getItem('currentUser'))

	}
}