// import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
// import { Router, ActivatedRoute } from '@angular/router'
// import { BaseDataService } from "app/Services/basedata.service";
// import { CostingServices } from "app/Layouts/Costing/costing.service";
// import { DxPivotGridModule } from 'devextreme-angular';

// declare var jQuery: any;
// declare var $: any;

// @Component({
// 	selector: 'costing-dtcb-porject',
// 	styleUrls: ['costing-dtcb-porject.component.css'],
// 	templateUrl: 'costing-dtcb-porject.component.html'
// })

// export class CostingDtcbPorjectComponent implements OnInit {
// 	datas;
// 	el: ElementRef;
// 	vname;
// 	dataSource: any;
// 	@ViewChild('tree') tree: ElementRef;

// 	constructor(
// 		private router: Router,
// 		private route: ActivatedRoute,
// 		private baseDataService: BaseDataService,
// 		el: ElementRef,
// 		private costingServices: CostingServices
// 	) {
// 		this.el = el;
// 	}

// 	initGrid() {
// 		setTimeout(() => {
// 			(jQuery(this.tree.nativeElement).treegrid())
// 		}, 100);
// 	}
// 	fixHead() {
// 		setTimeout(() => {
// 			var $table = $('table');
// 			$table.floatThead({
// 				responsiveContainer: function ($table) {
// 					return $table.closest('.table-responsive');
// 				}
// 			});
// 		}, 100);
// 	}


// 	ngOnInit() {
// 		//动态成本列表
// 		this.route.params.subscribe(params => {
// 			if ((params as any).vname) {
// 				this.vname = (params as any).vname
// 			}
// 		});
// 		this.getDatas(this.vname)

// 	}

// 	getDatas(vname) {
// 		this.costingServices.getDtcb(vname).then(response => {
// 			this.datas = response as any;
// 			console.log(this.datas)
// 			this.initGrid();
// 			// for (var i in this.datas) {
// 			// 	var position = this.datas[i].codenew.split(".");
// 			// 	this.datas[i].position = position;
// 			// 	for (var x = 0; x < position.length; x++) {
// 			// 		if (x == 0) {
// 			// 			this.datas[i].position1 = position[x];
// 			// 		}
// 			// 		if (x == 1) {
// 			// 			this.datas[i].position2 = position[x - x] + position[x];
// 			// 		}
// 			// 		if (x == 2) {
// 			// 			this.datas[i].position3 = position[x - x] + position[x - x + 1] + position[x];
// 			// 		}
// 			// 		if (x == 3) {
// 			// 			this.datas[i].position4 = position[x - x] + position[x - x + 1] + position[x - x + 2] + position[x];
// 			// 		}
// 			// 		if (x == 4) {
// 			// 			this.datas[i].position5 = position[x - x] + position[x - x + 1] + position[x - x + 2] + position[x - x + 3] + position[x];
// 			// 		}
// 			// 		if (x == 5) {
// 			// 			this.datas[i].position6 = position[x - x] + position[x - x + 1] + position[x - x + 2] + position[x - x + 3] + position[x - x + 4] + position[x];
// 			// 		}
// 			// 	}
// 			// }
// 			// this.dataSource = {
// 			// 	fields: [{
// 			// 		caption: 'position1',
// 			// 		dataField: 'position1',
// 			// 		area: 'row'
// 			// 	}, {
// 			// 		caption: 'position2',
// 			// 		dataField: 'position2',
// 			// 		area: 'row'
// 			// 	}, {
// 			// 		caption: 'position3',
// 			// 		dataField: 'position3',
// 			// 		area: 'row'
// 			// 	}, {
// 			// 		caption: 'position4',
// 			// 		dataField: 'position4',
// 			// 		area: 'row'
// 			// 	}, {
// 			// 		caption: 'position5',
// 			// 		dataField: 'position5',
// 			// 		area: 'row'
// 			// 	}, {
// 			// 		caption: 'position6',
// 			// 		dataField: 'position6',
// 			// 		area: 'row'
// 			// 	}, {
// 			// 		caption: 'Region',
// 			// 		area: 'column'
// 			// 	}, {
// 			// 		caption: '原始目标成本',
// 			// 		dataField: 'cs24Orprices',
// 			// 		dataType: 'number',
// 			// 		summaryType: 'sum',
// 			// 		area: 'data',
// 			// 		calculateSummaryValue: function (e) {
// 			// 			if (e.field("row") && e.field("row").dataField === "position2" && e.value("position2") === undefined) {
// 			// 				return null
// 			// 			} else if (e.field("row") && e.field("row").dataField === "position3" && e.value("position3") === undefined) {
// 			// 				return null
// 			// 			} else if (e.field("row") && e.field("row").dataField === "position4" && e.value("position4") === undefined) {
// 			// 				return null
// 			// 			} else if (e.field("row") && e.field("row").dataField === "position5" && e.value("position5") === undefined) {
// 			// 				return null
// 			// 			} else if (e.field("row") && e.field("row").dataField === "position6" && e.value("position6") === undefined) {
// 			// 				return null
// 			// 			} else { return e.value(); }
// 			// 		}
// 			// 	}, {
// 			// 		caption: '原始目标成本',
// 			// 		dataField: 'velemname',
// 			// 		area: 'data',
// 			// 		calculateSummaryValue: function (e) {
// 			// 			if (e.field("row") && e.field("row").dataField === "position2" && e.value("position2") === undefined) {
// 			// 				return null
// 			// 			} else if (e.field("row") && e.field("row").dataField === "position3" && e.value("position3") === undefined) {
// 			// 				return null
// 			// 			} else if (e.field("row") && e.field("row").dataField === "position4" && e.value("position4") === undefined) {
// 			// 				return null
// 			// 			} else if (e.field("row") && e.field("row").dataField === "position5" && e.value("position5") === undefined) {
// 			// 				return null
// 			// 			} else if (e.field("row") && e.field("row").dataField === "position6" && e.value("position6") === undefined) {
// 			// 				return null
// 			// 			} else { return e.value(); }
// 			// 		}
// 			// 	}],
// 			// 	store: this.datas
// 			// }
// 		})
// 	}
// 	nameSelector(data) {
// 		return data.velemcode + ' (' + data.velemname + ')';
// 	}
// 	onCellPrepared(e) {

// 		if (e.cell.rowType == "GT") {
// 			console.log(e)
// 			e.cell.text = "合计"
// 		}
// 	}
// }
// 	// ||
// 	// 					e.value("position3") === undefined ||
// 	// 					e.value("position4") === undefined ||
// 	// 					e.value("position5") === undefined ||
// 	// 					e.value("position6") === undefined