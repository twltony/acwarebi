import { BaseDataService } from 'app/Services/basedata.service';
import { MarketingService } from './../marketing.services';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'marketing-month-fee',
	templateUrl: 'marketing-month-fee.component.html'
})

export class MarketingMonthFeeComponent implements OnInit {
	datas;
	chartDatas;

	constructor(
		private service:MarketingService,
		public baseService:BaseDataService
	) {
	}
	

	ngOnInit() {
		let month = this.baseService.month
		this.service.getMonthSalesFee(month).then(response => {
		 	this.datas = response;
		})
		this.service.getAllMonthFeeSum().then(response => {
		 	this.chartDatas = response;
		})
	 }
}