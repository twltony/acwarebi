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
	el: ElementRef;
	vname;
	dataSource: any;
	@ViewChild('tree') tree: ElementRef;

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
	getDetial(){
		console.log(1)
	}

}