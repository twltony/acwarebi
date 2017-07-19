import {BaseDataService} from '../../Services/basedata.service';
/**
 * Created by Tony on 2017/3/8.
 */
import {Component, OnInit, ViewChild} from '@angular/core';
import { CheckRightService } from "app/Services/checkright.service";


@Component({
    selector: 'tendering-subject',
    styleUrls:['tendering.component.css'],
    templateUrl: 'tendering.component.html'
})
export class Tendering  {


	constructor(private baseDataService:BaseDataService,
				private checkRightService:CheckRightService){
          	this.baseDataService.clickTendering(localStorage.getItem('currentUser'))
        }


  createModalMarketSum(){
    //this.MarketSumModal.showModal();
  }



}
