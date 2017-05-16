/**
 * Created by Tony on 2017/3/8.
 */
import {Component, OnInit, Input, ElementRef,AfterContentChecked } from '@angular/core';
import { Router } from '@angular/router';
import { MarketingDatas } from '../../Models/marketing'
import { BaseDataService  } from '../../Services/basedata.service'
import { MarketingService } from './marketing.services'
import { ColumnChartData } from '../../Models/columnchart'
import { Series } from '../../Models/series'
import { DxChartModule } from 'devextreme-angular';


@Component({
    selector: 'marketing-subject',
    styleUrls:['./marketing.component.css'],
    templateUrl: 'marketing.component.html',
    providers:[]

})
export class Marketing implements OnInit{
 marketingDatas : MarketingDatas[];
 chartData;
 piechartData;
 selectedYear;
 month;
 columnChartData = new ColumnChartData();

    constructor(
      private router: Router,
      private _el: ElementRef,
      private marketingService: MarketingService,
      private basicService: BaseDataService
    ) {
       
    }

    ngOnInit() {
      this.month = this.basicService.month;
      this.marketingService.getMarketingMainData()
        .then(marketingDatas => {
          this.marketingDatas = marketingDatas;
          var columndata = (marketingDatas as any).columnChart
          this.chartData = (columndata as any).chartData
           for(let cat in this.chartData){
             ( this.chartData[cat] as any).nPlan = ((this.chartData[cat] as any).nPlan/10000);
             ( this.chartData[cat] as any).nMoney = (( this.chartData[cat] as any).nMoney/100000000);
          }
          var pieData = (marketingDatas as any).pieChart
          this.piechartData = (pieData as any).chartSeries
          for(let pie in this.piechartData){
            (this.piechartData[pie] as any).value = this.piechartData[pie].value / ((this.marketingDatas as any).qzYhmj * 100)
          }
      })
   }

    navTo(routepath): void{
      this.router.navigate([routepath]);
    }

    navToArg(routepath,arg): void{
      this.router.navigate([routepath,arg]);
    }
     onSelectYear(year): void {
      this.selectedYear=year;
    } 

    columnChatData(){
      (this.marketingDatas as any).columnChart
    }
    customizeLabel(point) {
        return point.argumentText + ": " +point.valueText + "%";
    }
    onPointClick(e){
      this.router.navigate(['/MarketingMonthArea',e.target.argument])
    }
    piePointClick(e){
      this.router.navigate(['/MarketingQzyhArea',e.target.argument]);
    }
}
