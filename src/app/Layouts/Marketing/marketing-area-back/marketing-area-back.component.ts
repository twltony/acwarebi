import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MarketingService } from "app/Layouts/Marketing/marketing.services";
import { BaseDataService } from "app/Services/basedata.service";

@Component({
	selector: 'marketing-area-back',
	templateUrl: 'marketing-area-back.component.html'
})

export class MarketingAreaBackComponent implements OnInit {
	datas;
	area;
	constructor(
		private service:MarketingService,
		private baseservice:BaseDataService,
		private route: ActivatedRoute
	) {
	}
	
	ngOnInit() { 
		this.route.params.subscribe(params => { 
			if((params as any).area){
			 this.area = (params as any).area
			}
   		 });
		this.service.getAreaBack(this.area).then(response => {
		 	this.datas = response;
		})
	 }
}