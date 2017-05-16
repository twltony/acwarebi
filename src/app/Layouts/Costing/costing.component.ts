/**
 * Created by Tony on 2017/3/8.
 */
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http'
import { CostingServices } from './costing.service'
import { BaseDataService } from "app/Services/basedata.service";

@Component({
    selector: 'costing-subject',
    styleUrls: ['./costing.component.css'],
    templateUrl: 'costing.component.html',
    providers: []
})
export class Costing implements OnInit {
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
