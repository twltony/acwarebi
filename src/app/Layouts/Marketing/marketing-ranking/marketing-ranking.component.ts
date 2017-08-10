import { Component, OnInit } from '@angular/core';
import { MarketingService } from "app/Layouts/Marketing/marketing.services";
import { BaseDataService } from "app/Services/basedata.service";

@Component({
	selector: 'marketing-ranking',
	templateUrl: 'marketing-ranking.component.html'
})

export class MarketingRankingComponent implements OnInit {
	datas;

	constructor(
		private service:MarketingService,
		public basicservice:BaseDataService
	) {
	}
	
	ngOnInit() {
		var year = this.basicservice.year;
		var month = this.basicservice.month;
		this.service.getSalesRankDetail(year, month).then(response =>{
			this.datas = response
		})
	}
}