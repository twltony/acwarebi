import { Component, OnInit } from '@angular/core';
import { CostingServices } from "app/Layouts/Costing/costing.service";
import { BaseDataService } from "app/Services/basedata.service";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
	selector: 'costing-whtfytz-project',
	templateUrl: 'costing-whtfytz-project.component.html',
	styleUrls: ['costing-whtfytz-project.component.css']
})

export class CostingWhtfytzProjectComponent implements OnInit {

	vName;
	vNames;
	unitName;
	unitNames;
	whtfy;
	ljwfSum;
	summary;
	isLoading;

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
			//项目列表
			this.getProjectList(this.unitName);
		})
	}

	//获取表格数据
	getDatas(vname) {
		this.isLoading = true;
		this.costingServices.getWhtfy(this.vName).then(response => {
			this.whtfy = response;
			console.log(response)
			this.summary = this.whtfy[0].sum;
			this.getLjSummary();
			setTimeout(() => {
				this.isLoading = false
			}, 500);
		})
	}

	//获取累计未付总数
	getLjSummary() {
		var sum = this.summary.nsumapplybasemny - this.summary.npaidbasemny;
		this.ljwfSum = sum;
	}

	//获取项目列表
	getProjectList(unitName) {
		let params = new URLSearchParams();
		params.append('unitName', unitName)
		this.costingServices.getVnames(params).then(response => {
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

}