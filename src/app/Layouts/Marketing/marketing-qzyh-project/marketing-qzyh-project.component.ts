import { ActivatedRoute,Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MarketingService } from "app/Layouts/Marketing/marketing.services";
import { BaseDataService } from "app/Services/basedata.service";

@Component({
	selector: 'marketing-qzyh-project',
	templateUrl: 'marketing-qzyh-project.component.html'
})

export class MarketingQzyhProjectComponent implements OnInit {
	datas;
	area='';
	areas;
	yhType='';
	yhTypes;
	constructor(
		private service: MarketingService,
		private baseservice: BaseDataService,
		private route: ActivatedRoute,
		private router: Router
	) {
	}
	
	ngOnInit() {
		this.yhTypes = this.baseservice.yhTypes;
		this.route.params.subscribe(params => { 
			if((params as any).area){
			 this.area = (params as any).area
			}
			if((params as any).type){
			 this.yhType = (params as any).type
			}
   		 });
		this.service.getProjectQzyhByArea(this.area,this.yhType).then(response =>{
			this.datas = response
		})
		this.service.getAreaList().then(response => {
			this.areas = response
		})
	 }
	 changeArea(area){
		this.area = area;
		 this.service.getProjectQzyhByArea(this.area,this.yhType).then(response =>{
			this.datas = response
		})
	 }
	 changeType(type){
		this.yhType = type;
		 this.service.getProjectQzyhByArea(this.area,this.yhType).then(response =>{
			this.datas = response
		})
	 }

}