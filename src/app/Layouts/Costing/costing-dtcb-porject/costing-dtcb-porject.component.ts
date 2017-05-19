import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
import { BaseDataService } from "app/Services/basedata.service";
import { CostingServices } from "app/Layouts/Costing/costing.service";
import { DxPivotGridModule } from 'devextreme-angular';

declare var jQuery: any;
declare var $: any;

@Component({
	selector: 'costing-dtcb-porject',
	styleUrls: ['costing-dtcb-porject.component.css'],
	templateUrl: 'costing-dtcb-porject.component.html'
})

export class CostingDtcbPorjectComponent implements OnInit {
	datas;
	contractDatas;
	el: ElementRef;
	isDetailShow = false;
	detailTitle;
	vname;
	dataSource: any;
	@ViewChild('tree') tree: ElementRef;
	nmnyb3Sum = 0;
	nmnya3Sum = 0;
	nrpelembusinmySum = 0;


	constructor(
		private router: Router,
		private route: ActivatedRoute,
		private baseDataService: BaseDataService,
		el: ElementRef,
		private costingServices: CostingServices
	) {
		this.el = el;
	}

	initGrid() {
		setTimeout(() => {
			(jQuery(this.tree.nativeElement).treegrid())
		}, 100);
	}

	ngOnInit() {
		//动态成本列表
		this.route.params.subscribe(params => {
			if ((params as any).vname) {
				this.vname = (params as any).vname
			}
		});
		this.getDatas(this.vname)

	}

	//动态成本表
	getDatas(vname) {
		this.costingServices.getDtcb(vname).then(response => {
			this.datas = response as any;
			console.log(this.datas)
			this.initGrid();
		})
	}

	//动态成本明细
	getDetial(name,PK_CORP,PK_PROJECT,PK_ELEM) {
		this.detailTitle = name;
		this.isDetailShow = true;
		this.costingServices.getDtContract(PK_CORP,PK_PROJECT,PK_ELEM).then(response => {
			this.contractDatas = response as any;
			this.nmnyb3Sum =0;
			this.nmnya3Sum =0;
			this.nrpelembusinmySum=0;
			for(var x in response){
				this.nmnyb3Sum += response[x].nmnyb3=null?0:response[x].nmnyb3;
				this.nmnya3Sum += response[x].nmnya3=null?0:response[x].nmnya3;
				this.nrpelembusinmySum += response[x].nrpelembusinmy=null?0:response[x].nrpelembusinmy;
			}
		})
	}

}