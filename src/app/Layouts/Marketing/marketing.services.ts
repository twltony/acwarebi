import { Injectable } from '@angular/core'
import { Headers, Http, Response } from '@angular/http'
import { MarketingDatas } from '../../Models/marketing'
import { GlobalVariable } from '../../const'

import 'rxjs/add/operator/toPromise';

@Injectable()
export class MarketingService {
    private marketUrl = GlobalVariable.ServerAddress+'salesplan/getMonthSalesplanByYear';//首页数据
    private marketYearUrl = GlobalVariable.ServerAddress+'salesplan/getMarketYear';//年度销售情况表数据
    private marketYearByArea = GlobalVariable.ServerAddress+'salesplan/getMarketYearByArea';//年度销售情况表数据-按区域
    private marketMonthUrl = GlobalVariable.ServerAddress+'salesplan/getareamonthstatus';//月度销售情况表数据
    private marketDayUrl = GlobalVariable.ServerAddress+'salesplan/getareadaystatus';//日销售情况表数据
    private marketMonthFeeUrl = GlobalVariable.ServerAddress+'salesplan/getMonthFee';  //月营销费用
    private marketAllMonthFeeSum = GlobalVariable.ServerAddress+'salesplan/getAllMonthFeeSum';  //月营销费用 - 每月汇总
    private marketYearBackUrl = GlobalVariable.ServerAddress+'salesplan/getYearBack'; //回款情况 - 集团
    private marketAreaBackUrl = GlobalVariable.ServerAddress+'salesplan/getAreaBack';//回款情况 - 按区域
    private marketZyhUrl = GlobalVariable.ServerAddress+'salesplan/getZyh'; //总余货 - 集团
    private marketZyhByArea = GlobalVariable.ServerAddress+'salesplan/getZyhByArea'; //总余货 - 区域
    private marketQzyhAreaUrl = GlobalVariable.ServerAddress+'salesplan/getZyhAreaSum'; //取证余货 - 集团
    private marketProjectQzyhbyAreal = GlobalVariable.ServerAddress+'salesplan/getQzyhByArea'; //取证余货 - 按区域 -项目
    private marketSalesRankDetail = GlobalVariable.ServerAddress+'salesplan/getSalesRankDetail'; //销售排名情况表
    private marketProjectMonthSales = GlobalVariable.ServerAddress+'salesplan/getProjectMonthSales'; //月销售情况-按区域=项目
    private marketProjectDaySales = GlobalVariable.ServerAddress+'salesplan/getProjectDaySales';//日销售情况-按区域-项目
    private marketAreaList = GlobalVariable.ServerAddress+'salesplan/getAreaList';//获取区域列表
    
    private time1;
    private time0;
    private username = localStorage.currentUser;
    private MarketMainData;

    private yhTypes = [];
    private handleError(error:any): Promise<any>{
        console.error("MarketingService服务错误:",error);
        return Promise.reject(error.message || error);
    }

    constructor(private http:Http){
        this.time0 = new Date();
    }
    
    newTime(){
        var date = new Date()
        var t0 = this.time0
        this.time1 = this.time0;
        this.time0 = Date.parse(date as any);
        console.log("time0"+t0);
        console.log(this.time1);
    }
    //首页数据
    getMarketingMainData(): Promise<MarketingDatas[]>{
        this.newTime();
        return this.http.get(this.marketUrl +'?time='+this.time1+'&username='+this.username)
                    .toPromise()
                    .then(response => {
                        this.MarketMainData = response.json();
                        return response.json() as MarketingDatas[]
                    }
                    )
                    .catch(this.handleError);
    }

    getSalesStatusData():  Promise<MarketingDatas[]>{
        this.newTime();
        return this.http.get(this.marketUrl +'?time='+this.time1+'&username='+this.username)
                    .toPromise()
                    .then(response => {
                        return response.json() as MarketingDatas[]
                    }
                    )
                    .catch(this.handleError);
    }
    //年度销售情况表数据
    getYearMarketData():  Promise<MarketingDatas[]>{
        this.newTime();
        return this.http.get(this.marketYearUrl +'?time='+this.time1+'&username='+this.username)
                    .toPromise()
                    .then(response => {
                        return response.json() as MarketingDatas[]
                    }
                    )
                    .catch(this.handleError);
    }
    //年度销售情况表数据-按区域
    getYearMarketByArea(area):  Promise<MarketingDatas[]>{
        this.newTime();
        return this.http.get(this.marketYearByArea + "?area="+area +'&time='+this.time1+'&username='+this.username)
                    .toPromise()
                    .then(response => {
                        return response.json() as MarketingDatas[]
                    }
                    )
                    .catch(this.handleError);
    }
    //月度销售情况表数据
    getAreaMonthStatusData(year,month):  Promise<Object>{
        this.newTime();
        return this.http.get(this.marketMonthUrl+"?year="+year+"&month="+month+'&time='+this.time1+'&username='+this.username)
                    .toPromise()
                    .then(response => {
                        return response.json() as Object
                    }
                    )
                    .catch(this.handleError);
    }
    //日销售情况表数据
    getAreaDayStatusData():  Promise<Object>{
        this.newTime(); 
        return this.http.get(this.marketDayUrl+'?time='+this.time1+'&username='+this.username)
                    .toPromise()
                    .then(response => {
                        return response.json() as Object
                    }
                    )
                    .catch(this.handleError);
    }
    //月营销费用
    getMonthSalesFee(mm): Promise<Object>{
        this.newTime();          
        return this.http.get(this.marketMonthFeeUrl+"?month="+mm+'&time='+this.time1+'&username='+this.username)
                    .toPromise()
                    .then(response => {
                        return response.json() as Object
                    }
                    )
                    .catch(this.handleError);
    }
    //月营销费用 - 每月汇总
    getAllMonthFeeSum(): Promise<Object>{
        this.newTime();          
        return this.http.get(this.marketAllMonthFeeSum+'?time='+this.time1+'&username='+this.username)
                    .toPromise()
                    .then(response => {
                        return response.json() as Object
                    }
                    )
                    .catch(this.handleError);
    }
    //集团回款
    getYearBack(year): Promise<Object>{
        this.newTime();          
        return this.http.get(this.marketYearBackUrl+"?year="+year+'&time='+this.time1+'&username='+this.username)
                    .toPromise()
                    .then(response => {
                        return response.json() as Object
                    }
                    )
                    .catch(this.handleError);
    }
    //区域回款
    getAreaBack(area): Promise<Object>{
        this.newTime();          
        return this.http.get(this.marketAreaBackUrl+"?area="+area+'&time='+this.time1+'&username='+this.username)
                    .toPromise()
                    .then(response => {
                        return response.json() as Object
                    }
                    )
                    .catch(this.handleError);
    }
    //集团总余货
    getZyh(): Promise<Object>{
        this.newTime();          
        return this.http.get(this.marketZyhUrl+'?time='+this.time1+'&username='+this.username)
                    .toPromise()
                    .then(response => {
                        return response.json() as Object
                    }
                    )
                    .catch(this.handleError);
    }
    //集团总余货
    getZyhByArea(area): Promise<Object>{
        this.newTime();          
        return this.http.get(this.marketZyhByArea+ "?area="+area+'&time='+this.time1+'&username='+this.username)
                    .toPromise()
                    .then(response => {
                        return response.json() as Object
                    }
                    )
                    .catch(this.handleError);
    }
    //集团已取证余货区域汇总情况
    getQzyhArea(type): Promise<Object>{
        this.newTime();          
        return this.http.get(this.marketQzyhAreaUrl + "?type="+type+'&time='+this.time1+'&username='+this.username)
                    .toPromise()
                    .then(response => {
                        return response.json() as Object
                    }
                    )
                    .catch(this.handleError);
    }
    //项目已取证余货-按区域
    getProjectQzyhByArea(area,type): Promise<Object>{
        this.newTime();          
        return this.http.get(this.marketProjectQzyhbyAreal + "?area="+area +"&type="+type+'&time='+this.time1+'&username='+this.username)
                    .toPromise()
                    .then(response => {
                        return response.json() as Object
                    }
                    )
                    .catch(this.handleError);
    }
    //销售情况明细表
    getSalesRankDetail(year,month): Promise<Object>{
        this.newTime();          
        return this.http.get(this.marketSalesRankDetail + "?year="+year+"&month="+month+'&time='+this.time1+'&username='+this.username)
                    .toPromise()
                    .then(response => {
                        return response.json() as Object
                    }
                    )
                    .catch(this.handleError);
    }
    //项目月销售情况
    getProjectMonthSales(area,month): Promise<Object>{
        this.newTime();          
        return this.http.get(this.marketProjectMonthSales + "?area="+area+"&month="+month+'&time='+this.time1+'&username='+this.username)
                    .toPromise()
                    .then(response => {
                        return response.json() as Object
                    }
                    )
                    .catch(this.handleError);
    }
    //项目日销售情况
    getProjectDaySales(area): Promise<Object>{
        this.newTime();          
        return this.http.get(this.marketProjectDaySales + "?area="+area+'&time='+this.time1+'&username='+this.username)
                    .toPromise()
                    .then(response => {
                        return response.json() as Object
                    }
                    )
                    .catch(this.handleError);
    }
    //获取区域列表
    getAreaList(): Promise<Object>{
        this.newTime();         
        return this.http.get(this.marketAreaList+'?time='+this.time1+'&username='+this.username).toPromise().then(response=>{
            return response.json() as Object
        }).catch(this.handleError);
    }

}