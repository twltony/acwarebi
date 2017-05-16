import { MarketingService } from 'app/Layouts/Marketing/marketing.services';
import { BaseDataService } from 'app/Services/basedata.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'marketing-zyh-project',
	templateUrl: 'marketing-zyh-project.component.html'
})

export class MarketingZyhProjectComponent implements OnInit {
	datas;
	area='';
	areas;
	constructor(
		private service: MarketingService,
		private baseservice: BaseDataService,
		private route: ActivatedRoute,
		private router: Router
	) {
	}
	
	ngOnInit() {
		this.route.params.subscribe(params => { 
			if((params as any).area){
			 this.area = (params as any).area
			}
   		 });
		this.service.getZyhByArea(this.area).then(response =>{
			this.datas = response
		})
		this.service.getAreaList().then(response => {
			this.areas = response
		})
	 }
	 changeArea(area){
		this.area = area;
		 this.service.getZyhByArea(this.area).then(response =>{
			this.datas = response
		})
	 }

}