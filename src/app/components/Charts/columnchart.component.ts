import { Router } from '@angular/router';
import { JsRoute } from './../../Utils/JsRoute/JsRoute.component';
/**
 * Created by Tony on 2017/3/8.
 * 条形图控件
 */
import {
  Component,
  ElementRef,
  AfterViewInit,
  OnDestroy,
  Input,
  ViewChild
} from '@angular/core';
import { MarketingDatas } from '../../Models/marketing'
import { ColumnChartData } from '../../Models/columnchart'

declare function require(arg:string): any;
const Highcharts = require('highcharts/highcharts.src');
import 'highcharts/adapters/standalone-framework.src';

@Component({
  selector: 'columnchart',
  template: `
        <div>
        <div #columnchart style=""></div>
        </div>
      `
})

export class Columnchart implements AfterViewInit, OnDestroy {
  @ViewChild('columnchart') public chartEl: ElementRef;
  @Input() 
  data: Object;
  constructor(private elRef: ElementRef,
    private route:Router
  ){}

  ngOnInit() {

  }

  private _chart: any;

  public ngAfterViewInit() {
    let ChartData = (this.data as any);
    let chart = new ColumnChartData;
    let chartHight;
    debugger
    if(ChartData._height){
      chartHight = ChartData._height;
    }
    //标题
    let title =ChartData._chartTitle
    //系列
    let series = ChartData._series;
    //Y轴数据
    let categories = [];
    categories= ChartData.categories
    let yText ="";
    if(ChartData._yText){
      yText = ChartData._yText
    }
    //事件
    let evt = Object;
    

    //图例
    let legendenable = true
    if(ChartData._legendenable!=undefined){
      legendenable = ChartData._legendenable
    }


    //配置图形            
    let opts: any = {
      title: {
        text: title,
        style: { "fontSize": "14px" }
      },
      xAxis: {
        categories: categories
      },
      yAxis: {
        min: 0,
        title: {
            text: yText 
        }
      },
      plotOptions: {
        column: {
          dataLabels: {enabled: true},
          pointWidth: 10
        },
        series: {
            cursor: 'pointer',
            events: {
              click: function(event){
                if(ChartData.event){
                    this.router.navigate(['Costing']);
                }
              }
            }
        }
      },
      legend: {
        enabled: legendenable
      },
      series: series,
      credits: {
             enabled:false
        }
    };

    if (this.chartEl && this.chartEl.nativeElement) {
      opts.chart = {
        type: 'column',
        height: chartHight,
        renderTo: this.chartEl.nativeElement
      };

      this._chart = new Highcharts.Chart(opts);
    }
  }

  events(){
    alert()
  }

  public ngOnDestroy() {
    this._chart.destroy();
  }
}
