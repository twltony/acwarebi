import { ActivatedRoute,Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MarketingService } from "app/Layouts/Marketing/marketing.services";
import { BaseDataService } from "app/Services/basedata.service";

@Component({
	selector: 'marketing-qzyh-area',
	templateUrl: 'marketing-qzyh-area.component.html'
})

export class MarketingQzyhAreaComponent implements OnInit {
	debugger
	datas;
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
		this.yhTypes = this.baseservice.yhTypes
		this.route.params.subscribe(params => { 
			if((params as any).type){
			 this.yhType = (params as any).type
			}
   		 });
		this.service.getQzyhArea(this.yhType).then(response =>{
			this.datas = response
		})
	 }
	 changeType(type){
		 this.yhType = type;
		 this.service.getQzyhArea(this.yhType).then(response =>{
			this.datas = response
		})
	 }
	  goProject(e){
		  this.router.navigate(['MarketingQzyhProject',e.data.vBuname,this.yhType]);
	  }
	  getLastRow(e){
		  console.log(e)
	  }

}