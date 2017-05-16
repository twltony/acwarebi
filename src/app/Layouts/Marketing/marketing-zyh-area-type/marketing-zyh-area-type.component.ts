import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MarketingService } from "app/Layouts/Marketing/marketing.services";
import { BaseDataService } from "app/Services/basedata.service";

@Component({
	selector: 'marketing-zyh-area-type',
	templateUrl: 'marketing-zyh-area-type.component.html',
	styleUrls:['marketing-zyh-area-type.component.css']
})

export class MarketingZyhAreaTypeComponent implements OnInit {
	datas;

	constructor(
		private service:MarketingService,
		private baseService:BaseDataService,
		private router:Router
	) {
	}
	

	ngOnInit() {
		let month = this.baseService.month
		this.service.getZyh().then(response => {
		 	this.datas = response;
		})
	 }

	goProject(e){
		  this.router.navigate(['MarketingZyhProject',e.data.vBuname]);
	  }

	  
}