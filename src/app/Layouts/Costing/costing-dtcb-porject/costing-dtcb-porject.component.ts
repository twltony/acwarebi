import { DxTreeListModule, DxTreeListComponent } from 'devextreme-angular';
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
import { BaseDataService } from "app/Services/basedata.service";
import { CostingServices } from "app/Layouts/Costing/costing.service";

import { SwiperComponent, SwiperDirective, SwiperConfigInterface } from 'ngx-swiper-wrapper';


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
	isSumDetailShow = false;
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
	@ViewChild('treelist') treeList: DxTreeListComponent;
	@ViewChild(SwiperComponent) componentRef: SwiperComponent;
	SwipeOptions: any;

	public config: SwiperConfigInterface = {
		slidesPerView: 1,
		autoplay: 6000,
		loop: true,
		direction: 'vertical',
		pagination: '.swiper-pagination'
	};


	constructor(
		private router: Router,
		private route: ActivatedRoute,
		private baseDataService: BaseDataService,
		el: ElementRef,
		private costingServices: CostingServices
	) {
		this.el = el;
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
			this.summary = this.datas[0].data;
			this.isLoading = false;
			//this.initGrid();
		})
	}

	//动态成本明细
	getDetial(name, PK_CORP, PK_PROJECT, PK_ELEM) {
		this.detailTitle = name;
		this.isLoading = true;
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
			this.isDetailShow = true;
		})
	}
	customizeSizeText(e) {
		let num = e.value;
		if (num !== null || num !== '-') {
			num = (num || 0).toString()
			let result = '';
			while (num.length > 3) {
				result = ',' + num.slice(-3) + result;
			}
			if (num) { result = num + result }
			return result;
		}
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
		let params = new URLSearchParams();
		params.append('unitName', unitName)
		this.costingServices.getVnames(params).then(response => {
			this.vNames = response as any;
			if (!this.vName) {
				this.vName = this.vNames[0]
			}
		})
	}
	//项目列表并加装数据
	getProjectListAndLoad(unitName) {
		let params = new URLSearchParams();
		params.append('unitName', unitName)
		this.costingServices.getVnames(params).then(response => {
			this.vNames = response as any;
			if (this.vNames) {
				this.vName = this.vNames[0]
			}
			//this.isLoading = true;
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
		//this.isLoading = true;
		this.vName = vName;
		setTimeout(() => {
			this.getDatas(this.vName);
		}, 100);

	}
	//优化循环相应速度
	trackByIndex(index) {
		return index;
	}
	cellPrepared(e) {
		if (e.data) {
			if (e.cellElement[0].parentElement) {
				//间隔行底色
				if (e.rowIndex % 2 == 1) {
					e.cellElement[0].parentElement.style.backgroundColor = "#f5f5f5";
				}
				//0.02>=节余率>0，显示橙色
				if (e.data.nmnysum3 != 0 && e.data.jyl >0 && e.data.jyl <=0.02 ) {
					e.cellElement[0].parentElement.style.backgroundColor = "#F57600"
				}
				//	当动态成本超出目标成本时，显示红色
				if (e.data.nmnysum3 != 0 && e.data.jyl >0.02 || e.data.jyl < -0.2) {
					e.cellElement[0].parentElement.style.backgroundColor = "#C92100"
				}
			}
			if (e.columnIndex == 1 && e.data.data && e.data.data.lastChildDetail == true) {
				e.cellElement[0].className += "grid-button"
			}
		}
	}
	cellClick(e) {
		if (e.data) {
			if (e.data.data && e.data.data.lastChildDetail == true) {
				this.getDetial(e.data.data.velemname, e.data.data.pkCorp, e.data.data.pkProject1, e.data.data.pkElem)
			}
		}
	}

	explandnodes(node) {
		let instance = this.treeList.instance;
		instance.refresh();
		let root = instance.getRootNode();
		let rootChildren = root.children;
		function getNode(data, theNode) {
			for (var i in data) {
				if (data[i].level == node) {
					//instance.isRowExpanded(data[i].key) ? instance.collapseRow(data[i].key) : instance.expandRow(data[i].key)
					instance.collapseRow(data[i].key)
				} else {
					getNode(data[i].children, node)
				}
			}
		}
		setTimeout(() => {
			getNode(rootChildren, node);
		}, 100);
	}
}