import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { GlobalVariable } from '../../const'

@Injectable()
export class CostingServices {
    private costVnamesUrl = GlobalVariable.ServerAddress + 'costing/getVnames';//项目名称
    private costUnitNamesUrl= GlobalVariable.ServerAddress + 'costing/getUnitNames';//区域名称
    private costMainUrl = GlobalVariable.ServerAddress + 'costing/getCostMain';//成本首页数据
    private costGcfxUrl = GlobalVariable.ServerAddress + 'costing/getGcfx';//构成分析数据
    private costJzdfUrl = GlobalVariable.ServerAddress + 'costing/getJzdf';//建筑单方数据
    private costDtcbUrl = GlobalVariable.ServerAddress + 'costing/getDtcb';//动态成本数据

    private handleError(error: any): Promise<any> {
        console.error("MarketingService服务错误:", error);
        return Promise.reject(error.message || error);
    }

    constructor(private http: Http) {
    }

    //项目列表
    getVnames(unitName): Promise<Object> {
        return this.http.get(this.costVnamesUrl+"?unitName="+unitName)
            .toPromise()
            .then(response => {
                return response.json() as Object
            }
            )
            .catch(this.handleError);
    }

    //区域板块列表数据
    getUnitNames(): Promise<Object> {
        return this.http.get(this.costUnitNamesUrl)
            .toPromise()
            .then(response => {
                return response.json() as Object
            }
            )
            .catch(this.handleError);
    }

    //首页数据
    getCostMain(): Promise<Object> {
        return this.http.get(this.costMainUrl)
            .toPromise()
            .then(response => {
                return response.json() as Object
            }
            )
            .catch(this.handleError);
    }
    //构成分析
    getGcfx(vname): Promise<Object> {
        return this.http.get(this.costGcfxUrl+"?vname="+vname)
            .toPromise()
            .then(response => {
                return response.json() as Object
            }
            )
            .catch(this.handleError);
    }
    //建筑单方
    getJzdf(typename2): Promise<Object> {
        return this.http.get(this.costJzdfUrl+"?typename2="+typename2)
            .toPromise()
            .then(response => {
                return response.json() as Object
            }
            )
            .catch(this.handleError);
    }

    //动态成本
    getDtcb(vname): Promise<Object> {
        return this.http.get(this.costDtcbUrl+"?vname="+vname)
            .toPromise()
            .then(response => {
                return response.json() as Object
            }
            )
            .catch(this.handleError);
    }
}