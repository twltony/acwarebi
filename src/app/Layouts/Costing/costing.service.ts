import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { GlobalVariable } from '../../const'
import { UserInfo } from "app/Utils/UserInfo";

@Injectable()
export class CostingServices {
    private costVnamesUrl = GlobalVariable.ServerAddress + 'costing/getVnames';//项目名称
    private costUnitNamesUrl = GlobalVariable.ServerAddress + 'costing/getUnitNames';//区域名称
    private costMainUrl = GlobalVariable.ServerAddress + 'costing/getCostMain';//成本首页数据
    private costDtcbDfdbUrl = GlobalVariable.ServerAddress + 'costing/getCostDtcbDfdb';//成本首页数据
    private costGcfxUrl = GlobalVariable.ServerAddress + 'costing/getGcfx';//构成分析数据
    private costJzdfUrl = GlobalVariable.ServerAddress + 'costing/getJzdf';//建筑单方数据
    private costDtcbUrl = GlobalVariable.ServerAddress + 'costing/getDtcb';//动态成本数据
    private costDtcbContractUrl = GlobalVariable.ServerAddress + 'costing/getDtcbContract';//动态成本数据
    private costHttzUrl = GlobalVariable.ServerAddress + 'costing/getHttz';//合同台账
    private costNoncontfeeUrl = GlobalVariable.ServerAddress + 'costing/getNoncontfee';//无合同费用台账
    private costZxcbUrl = GlobalVariable.ServerAddress + 'costing/getZxcb';//装修成本

    private handleError(error: any): Promise<any> {
        console.error("CosttingService服务错误:", error);
        return Promise.reject(error.message || error);
    }

    private headers: Headers;

    constructor(private http: Http) {
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/x-www-form-urlencoded');
    }

    //项目列表
    getVnames(params): Promise<Object> {
        let hasUserInfo = new UserInfo().checkUserInfo();
        console.log(params.toString());
        return this.http.post(this.costVnamesUrl, params.toString(), { headers: this.headers })
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

    //动态成本单方对比
    getCostDtcbDfdb(vdef5): Promise<Object> {
        return this.http.get(this.costDtcbDfdbUrl+ "?vdef5=" + vdef5)
            .toPromise()
            .then(response => {
                return response.json() as Object
            }
            )
            .catch(this.handleError);
    }
    //构成分析
    getGcfx(vname): Promise<Object> {
        return this.http.get(this.costGcfxUrl + "?vname=" + vname)
            .toPromise()
            .then(response => {
                return response.json() as Object
            }
            )
            .catch(this.handleError);
    }
    //建筑单方
    getJzdf(typename2): Promise<Object> {
        return this.http.get(this.costJzdfUrl + "?typename2=" + typename2)
            .toPromise()
            .then(response => {
                return response.json() as Object
            }
            )
            .catch(this.handleError);
    }

    //动态成本
    getDtcb(vname): Promise<Object> {
        return this.http.get(this.costDtcbUrl + "?vname=" + vname)
            .toPromise()
            .then(response => {
                console.log(response)
                return response.json() as Object[]
            }
            )
            .catch(this.handleError);
    }

    //动态成本合同
    getDtContract(PK_CORP, PK_PROJECT, PK_ELEM): Promise<Object> {
        return this.http.get(this.costDtcbContractUrl + "?PK_CORP=" + PK_CORP + "&PK_PROJECT=" + PK_PROJECT + "&PK_ELEM=" + PK_ELEM)
            .toPromise()
            .then(response => {
                return response.json() as Object
            }
            )
            .catch(this.handleError);
    }

    //合同台账
    getHttz(vname): Promise<Object> {
        return this.http.get(this.costHttzUrl + "?vname=" + vname)
            .toPromise()
            .then(response => {
                return response.json() as Object
            }
            )
            .catch(this.handleError);
    }
    //无合同费用
    getWhtfy(vname): Promise<Object> {
        return this.http.get(this.costNoncontfeeUrl + "?projectName=" + vname)
            .toPromise()
            .then(response => {
                return response.json() as Object
            }
            )
            .catch(this.handleError);
    }

    //装修成本
    getZxcb(): Promise<Object> {
        return this.http.get(this.costZxcbUrl)
            .toPromise()
            .then(response => {
                return response.json() as Object
            }
            )
            .catch(this.handleError);
    }
}