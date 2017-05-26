import { KSSwiperContainer, KSSwiperSlide } from 'angular2-swiper';
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
	summary;
	contractDatas;
	el: ElementRef;
	isDetailShow = false;
	detailTitle;
	dataSource: any;
	@ViewChild('tree') tree: ElementRef;
	nmnyb3Sum = 0;
	nmnya3Sum = 0;
	nrpelembusinmySum = 0;
	unitNames;
	unitName;
	vNames;
	vName;
	isLoading = false;
	@ViewChild(KSSwiperContainer) swiperContainer: KSSwiperContainer;
	SwipeOptions: any;


	constructor(
		private router: Router,
		private route: ActivatedRoute,
		private baseDataService: BaseDataService,
		el: ElementRef,
		private costingServices: CostingServices
	) {
		this.el = el;
		this.SwipeOptions = {
			slidesPerView: 1,
			autoplay: '6000',
			loop: true,
			direction: 'vertical',
			pagination: '.swiper-pagination',
		};
	}


	ngOnInit() {
		//动态成本列表
		this.route.params.subscribe(params => {
			if ((params as any).vname) {
				this.vName = (params as any).vname
			}
			if ((params as any).unitname) {
				this.unitName = (params as any).unitname
			}
		});
		this.isLoading = true;
		this.getDatas(this.vName);
		this.getUnits();
	}

	//动态成本表
	getDatas(vname) {
		this.costingServices.getDtcb(vname).then(response => {
			this.datas = response as any;
			this.getSummary(response);
			this.initGrid();
		})
	}

	//获取汇总数据
	getSummary(res){
		for(var i in res){
			if(res[i].fathercode.indexOf("0")==0){
				this.summary = res[i];
				console.log(this.summary)
				break;
			}
		}
	}

	//初始化动态报表
	initGrid() {
		setTimeout(() => {
			(jQuery(this.tree.nativeElement).treegrid())
		}, 100);
		setTimeout(() => {
			this.isLoading = false
		}, 500);
	}
	//动态成本明细
	getDetial(name, PK_CORP, PK_PROJECT, PK_ELEM) {
		this.detailTitle = name;
		this.isDetailShow = true;
		this.costingServices.getDtContract(PK_CORP, PK_PROJECT, PK_ELEM).then(response => {
			this.contractDatas = response as any;
			this.nmnyb3Sum = 0;
			this.nmnya3Sum = 0;
			this.nrpelembusinmySum = 0;
			for (var x in response) {
				this.nmnyb3Sum += response[x].nmnyb3 = null ? 0 : response[x].nmnyb3;
				this.nmnya3Sum += response[x].nmnya3 = null ? 0 : response[x].nmnya3;
				this.nrpelembusinmySum += response[x].nrpelembusinmy = null ? 0 : response[x].nrpelembusinmy;
			}
			this.isLoading = false;
		})
	}

	//区域列表
	getUnits() {
		//房产区域列表
		this.costingServices.getUnitNames().then(response => {
			this.unitNames = response as any;
			if (!this.unitName) {
				this.unitName = this.unitNames[0];
			}
			//项目列表
			this.getProjectList(this.unitName);
		})
	}

	//项目列表
	getProjectList(unitName) {
		this.costingServices.getVnames(unitName).then(response => {
			this.vNames = response as any;
			if (!this.vName) {
				this.vName = this.vNames[0]
			}
		})
	}
	//项目列表并加装数据
	getProjectListAndLoad(unitName) {
		this.costingServices.getVnames(unitName).then(response => {
			this.vNames = response as any;
			if (this.vNames) {
				this.vName = this.vNames[0]
			}
			this.isLoading = true;
			this.getDatas(this.vName)
		})
	}

	//构成分析改变板块
	onSelectUnit(unitName) {
		this.unitName = unitName;
		this.getProjectListAndLoad(unitName);
	}
	//构成分析改变项目
	onSelectProject(vName) {
		this.isLoading = true;
		this.vName = vName;
		setTimeout(() => {
			this.getDatas(this.vName);
		}, 100);

	}
	//优化循环相应速度
	trackByIndex(index) {
    return index;
}

}