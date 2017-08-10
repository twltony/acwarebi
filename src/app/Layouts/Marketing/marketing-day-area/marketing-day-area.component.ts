import { Router } from '@angular/router';
import { BaseDataService } from 'app/Services/basedata.service';
import { MarketingService } from './../marketing.services';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'marketing-day-area',
	templateUrl: 'marketing-day-area.component.html',
	styleUrls: ['marketing-day-area.component.css'],
	providers:[BaseDataService]
})

export class MarketingDayAreaComponent implements OnInit {
	datas;

	constructor(
		private service:MarketingService,
		public baseservice:BaseDataService,
		private router:Router
	) {
	}
	
	ngOnInit() { 
		this.service.getAreaDayStatusData().then(response =>{
			this.datas = response
		})
	}

	goProject(area){
		 this.router.navigate(['MarketingDayProject',area]);
	}
}