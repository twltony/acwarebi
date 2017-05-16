import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { BaseDataService } from "app/Services/basedata.service";
import { MarketingService } from "app/Layouts/Marketing/marketing.services";

@Component({
	selector: 'marketing-month-project',
	templateUrl: 'marketing-month-project.component.html'
})

export class MarketingMonthProjectComponent implements OnInit {
	datas;
	month= "";
	area="";

	constructor(
		private service: MarketingService,
		private baseservice: BaseDataService,
		private route: ActivatedRoute		

	) {
	}
	
	ngOnInit() {
		this.month = this.baseservice.month;
		this.route.params.subscribe(params => { 
			if((params as any).month){
			 this.month = (params as any).month
			 this.area = (params as any).area
			}
   		 });
		this.service.getProjectMonthSales(this.area,this.month).then(response =>{
			this.datas = response
		})
	 }

}