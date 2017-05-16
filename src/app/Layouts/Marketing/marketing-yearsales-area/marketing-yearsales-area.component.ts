import { MarketingService } from 'app/Layouts/Marketing/marketing.services';
import { BaseDataService } from 'app/Services/basedata.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'marketing-yearsales-area',
	templateUrl: 'marketing-yearsales-area.component.html'
})

export class MarketingYearsalesAreaComponent implements OnInit {
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
		this.service.getYearMarketByArea(this.area).then(response =>{
			this.datas = response
		})
		this.service.getAreaList().then(response => {
			this.areas = response
		})
	 }
	 changeArea(area){
		this.area = area.substring(0,2)+"区域";
		 this.service.getYearMarketByArea(this.area).then(response =>{
			this.datas = response
		})
	 }
	 
    janRate(data) {
        let result = data.nJanMoney / data.nJanPlan * 100;
        result = Math.round(result);
        if (data.nJanPlan == 0) { result = 0 };
        return String(result + "%");
    }
    febRate(data) {
        let result = data.nFebMoney / data.nFebPlan * 100;
        result = Math.round(result);
        if (data.nFebPlan == 0) { result = 0 };
        return String(result + "%");
    }
    marRate(data) {
        let result = data.nMarMoney / data.nMarPlan * 100;
        result = Math.round(result);
        if (data.nMarPlan == 0) { result = 0 };
        return String(result + "%");
    }
    aprRate(data) {
        let result = data.nAprMoney / data.nAprPlan * 100;
        result = Math.round(result);
        if (data.nAprPlan == 0) { result = 0 };
        return String(result + "%");
    }
    mayRate(data) {
        let result = data.nMayMoney / data.nMayPlan * 100;
        result = Math.round(result);
        if (data.nMayPlan == 0) { result = 0 };
        return String(result + "%");
    }
    juneRate(data) {
        let result = data.nJuneMoney / data.nJunePlan * 100;
        result = Math.round(result);
        if (data.nJunePlan == 0) { result = 0 };
        return String(result + "%");
    }
    julyRate(data) {
        let result = data.nJulyMoney / data.nJulyPlan * 100;
        result = Math.round(result);
        if (data.nJulyPlan == 0) { result = 0 };
        return String(result + "%");
    }
    augRate(data) {
        let result = data.nAugMoney / data.nAugPlan * 100;
        result = Math.round(result);
        if (data.nAugPlan == 0) { result = 0 };
        return String(result + "%");
    }
    septRate(data) {
        let result = data.nSeptMoney / data.nSeptPlan * 100;
        result = Math.round(result);
        if (data.nSeptPlan == 0) { result = 0 };
        return String(result + "%");
    }
    octRate(data) {
        let result = data.nOctMoney / data.nOctPlan * 100;
        result = Math.round(result);
        if (data.nOctPlan == 0) { result = 0 };
        return String(result + "%");
    }
    novRate(data) {
        let result = data.nNovMoney / data.nNovPlan * 100;
        result = Math.round(result);
        if (data.nNovPlan == 0) { result = 0 };
        return String(result + "%");
    }
    decRate(data) {
        let result = data.nDecMoney / data.nDecPlan * 100;
        result = Math.round(result);
        if (data.nDecPlan == 0) { result = 0 };
        return String(result + "%");
    }
    yearRate(data) {
        let result = data.nYearMoney / data.nYearPlan * 100
        result = Math.round(result);
        if (data.nYearPlan == 0) { result = 0 };
        return String(result + "%");
    }
}