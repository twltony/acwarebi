import { ActivatedRoute } from '@angular/router';
import { BaseDataService } from 'app/Services/basedata.service';
import { MarketingService } from 'app/Layouts/Marketing/marketing.services';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'marketing-day-project',
	templateUrl: 'marketing-day-project.component.html'
})

export class MarketingDayProjectComponent implements OnInit {
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
		this.service.getProjectDaySales(this.area).then(response =>{
			this.datas = response
		})
	}
}