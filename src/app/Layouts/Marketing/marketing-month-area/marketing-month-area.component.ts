import { Router, ActivatedRoute, Params  } from '@angular/router';
import { BaseDataService } from 'app/Services/basedata.service';
import { MarketingService } from './../marketing.services';
import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/switchMap';

@Component({
	selector: 'marketing-month-area',
	templateUrl: 'marketing-month-area.component.html',
	styleUrls: ['marketing-month-area.component.css'],
	providers:[BaseDataService]
})

export class MarketingMonthAreaComponent implements OnInit {
	datas;
	year;
	month= "";
	months;

	constructor(
		private service: MarketingService,
		private baseservice: BaseDataService,
		private route: ActivatedRoute,		
  		private router: Router

	) {
	}
	
	ngOnInit() {
		this.year = this.baseservice.year;
		this.month = this.baseservice.month;
		this.months = this.baseservice.months;
		this.route.params.subscribe(params => { 
			if((params as any).month){
			 this.month = (params as any).month
			}
   		 });
		this.service.getAreaMonthStatusData(this.year,this.month).then(response =>{
			this.datas = response
		})
	 }
	 changeDate(mm){
		 this.month = mm;
		 this.service.getAreaMonthStatusData(this.year,mm).then(response =>{
			this.datas = response
		})
	 }
	 goProject(area,month){
		 this.router.navigate(['MarketingMonthProject',area,month]);
	 }
	
}