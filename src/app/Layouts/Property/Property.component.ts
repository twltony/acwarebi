import { Component, OnInit } from '@angular/core';
import { CheckRightService } from "app/Services/checkright.service";
import { BaseDataService } from "app/Services/basedata.service";

@Component({
	selector: 'Property',
	templateUrl: 'Property.component.html',
	styleUrls: ['Property.component.css']
})

export class PropertyComponent implements OnInit {

	constructor(private baseDataService: BaseDataService,
		private checkRightService: CheckRightService) { }
	ngOnInit() {
		this.baseDataService.clickProperty(localStorage.getItem('currentUser'))

	}
}