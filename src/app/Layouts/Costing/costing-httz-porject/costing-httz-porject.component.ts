import { Component, OnInit } from '@angular/core';
import { CostingServices } from "app/Layouts/Costing/costing.service";
import { BaseDataService } from "app/Services/basedata.service";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
	selector: 'costing-httz-porject',
	styleUrls: ['costing-httz-porject.component.css'],
	templateUrl: 'costing-httz-porject.component.html'
})

export class CostingHttzPorjectComponent implements OnInit {
	datas;
	summary;
	ljwfSum;
	unitNames;
	unitName;
	vNames;
	vName;
	isLoading = false;

	constructor(
		private router: Router,
		private route: ActivatedRoute,
		private baseDataService: BaseDataService,
		private costingServices: CostingServices
	) { }
	ngOnInit() {
		this.route.params.subscribe(params => {
			if ((params as any).vname) {
				this.vName = (params as any).vname
			}
			if ((params as any).unitname) {
				this.unitName = (params as any).unitname
			}
		});
		this.getDatas(this.vName);
		//房产区域列表
		this.costingServices.getUnitNames().then(response => {
			this.unitNames = response as any;
			if (this.unitNames) {
				this.unitName = this.unitNames[0];
			}
			//项目列表
			this.getProjectList(this.unitName);
		})

	}


	getDatas(vName) {
		this.isLoading = true;
		this.costingServices.getHttz(this.vName).then(response => {
			this.datas = response
			this.summary = this.datas[0].sum;
			this.getSummary();
			setTimeout(() => {
				this.isLoading = false
			}, 500);
		})
	}

	trackByIndex(index) {
		return index;
	}

	//获取累计未付总数
	getSummary() {
		var sum = 0;
		for (var i in this.datas) {
			for (var j in this.datas[i].list) {
				if (this.datas[i].list[j].nsettleorigmny == null) {
					sum += this.datas[i].list[j].ncontbasemny - this.datas[i].list[j].npaybasemny
				} else {
					sum += this.datas[i].list[j].nsettleorigmny - this.datas[i].list[j].npaybasemny
				}
			}
		}
		this.ljwfSum = sum;
	}

	//项目列表
	getProjectList(unitName) {
		this.costingServices.getVnames(unitName).then(response => {
			this.vNames = response as any;
			if (this.vNames) {
				this.vName = this.vNames[0]
			}
			this.getDatas(this.vName);
		})
	}

	//构成分析改变板块
	onSelectUnit(unitName) {
		this.unitName = unitName;
		this.getProjectList(unitName);
	}
	//构成分析改变项目
	onSelectProject(vName) {
		this.vName = vName;
		this.getDatas(vName);
	}

	ngAfterViewChecked() {
		//this.isLoading = false;
	}
}