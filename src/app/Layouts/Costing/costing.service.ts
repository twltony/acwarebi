import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { GlobalVariable } from '../../const'

@Injectable()
export class CostingServices {
    private marketUrl = GlobalVariable.ServerAddress + 'costing/getCostMain';//成本首页数据


    private handleError(error: any): Promise<any> {
        console.error("MarketingService服务错误:", error);
        return Promise.reject(error.message || error);
    }

    constructor(private http: Http) {
    }

    //首页数据
    getCostMain(): Promise<Object> {
        return this.http.get(this.marketUrl)
            .toPromise()
            .then(response => {
                return response.json() as Object
            }
            )
            .catch(this.handleError);
    }
}