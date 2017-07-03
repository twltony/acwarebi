/**
 * Created by Tony on 2017/3/8.
 */
import {Component, OnInit, ViewChild} from '@angular/core';
import { Http } from '@angular/http'


@Component({
    selector: 'tendering-subject',
    styleUrls:['tendering.component.css'],
    templateUrl: 'tendering.component.html'
})
export class Tendering implements OnInit{
  // myVal: any

    constructor(public http: Http){

    }

    ngOnInit() {

  }

  createModalMarketSum(){
    //this.MarketSumModal.showModal();
  }



}
