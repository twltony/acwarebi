import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MarketingService } from "app/Layouts/Marketing/marketing.services";
import { BaseDataService } from "app/Services/basedata.service";

@Component({
	selector: 'marketing-year-back',
	templateUrl: 'marketing-year-back.component.html'
})

export class MarketingYearBackComponent implements OnInit {
	datas;
	chartData;
	constructor(
		private service:MarketingService,
		private baseService:BaseDataService,
		private router: Router
	) {
	}
	

	ngOnInit() {
		let year = this.baseService.year
		let chartDatas = new Array();
		this.service.getYearBack(year).then(response => {
		 	this.datas = response;
			if(this.datas){
			for(var data in this.datas){
				let temp = new Object() as any;
				if(this.datas[data].vBuname.indexOf("合计")<0){
					temp.vBuname = this.datas[data].vBuname;
					temp.nHkmoney = this.datas[data].nHkmoney;
					temp.nWhkmoney = this.datas[data].nWhkmoney;
					chartDatas.push(temp);
				}
			}
			this.chartData = chartDatas;
		}
		})

	 }
	goProject(area){
		 this.router.navigate(['MarketingAreaBack',area]);
	 }
	onPointClick(e){
      this.router.navigate(['/MarketingAreaBack',e.target.argument])
    }
}