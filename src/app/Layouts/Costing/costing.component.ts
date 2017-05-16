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


    constructor(
        private router: Router,
        private baseDataService: BaseDataService,
        private costingServices: CostingServices
    ) {
    }

    ngOnInit() {

    }

}
