import { Component, OnInit } from '@angular/core';
import { CostingServices } from "app/Layouts/Costing/costing.service";
import { BaseDataService } from "app/Services/basedata.service";
import { Router } from '@angular/router';

@Component({
	selector: 'costing-main',
    styleUrls: ['costing-main.component.css'],
	templateUrl: 'costing-main.component.html'
})

export class CostingMainComponent implements OnInit {
    datas: Object[];
    rowDatas: Object[];

    constructor(
        private router: Router,
        private baseDataService: BaseDataService,
        private costingServices: CostingServices
    ) {
    }

    ngOnInit() {
        this.costingServices.getCostMain().then(response => {
            this.datas = response as Object[];
            this.setRows(response);
        })
    }

    setRows(args) {
        let rowSize = 1
        let argSize = args.length;
        if (args.length > 0) {
            rowSize = Math.round(args.length / 4)
        }
        let rowArray = new Array();
        for (var i = 0; i < rowSize; i++) {
            if (args.length > 0 && args.length < 4) {
                let obj =new Array();
                let argSizeb = args.length;
                for (var x = 0; x < argSizeb; x++) {
                    obj.push(args.shift());
                }
                rowArray.push(obj);
            } else {
                let obj=new Array();
                for (var x = 0; x < 4; x++) {
                    obj.push(args.shift());
                }
                rowArray.push(obj);
            }
        }
        this.rowDatas = rowArray;
    }

}