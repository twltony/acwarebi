import { URLSearchParams } from '@angular/http';
import { Component, OnInit, ViewChild, AfterViewInit, OnChanges } from '@angular/core';
import { CostingServices } from "app/Layouts/Costing/costing.service";
import { BaseDataService } from "app/Services/basedata.service";
import { Router } from '@angular/router';
import { SwiperComponent, SwiperDirective, SwiperConfigInterface } from 'ngx-swiper-wrapper';


@Component({
    selector: 'costing-main',
    styleUrls: ['costing-main.component.css'],
    templateUrl: 'costing-main.component.html'
})

export class CostingMainComponent implements OnInit {
    datas;
    area;
    slideNavDatas;
    slideActiveIndex;
    slideNavActiveIndex;
    chartDatas;
    gcfxDatas;
    gcfxPieDatas;
    JzdfDatas;
    typeName = '前期费用';
    vName;
    vNames: Object[];
    unitName;
    unitNames: Object[];
    rowDatas: Object[];
    resolveOverlappingTypes = ["shift"];
    mode;
    chatHeight;
    rolling = true;
    yTypes = '住宅';

    @ViewChild('colRight') colRight: String;

    @ViewChild(SwiperComponent) componentRef: SwiperComponent;
    //@ViewChild(KSSwiperContainer) swiperContainer: KSSwiperContainer;
    constructor(
        private router: Router,
        private baseDataService: BaseDataService,
        private costingServices: CostingServices
    ) {
    }

    public config: SwiperConfigInterface = {
        
        autoplayDisableOnInteraction: false,
        centeredSlides: true,
        freeMode: true,
        grabCursor: true,
        autoplay: 2000,
        direction: 'horizontal',
        onSlideChangeStart: (slider) => {
            this.slideActiveIndex = slider.activeIndex
            for (var i = 0; i < this.slideNavDatas.length; i++) {
                if (!this.slideNavDatas[i].lastIndex) {
                    this.slideNavDatas[i].lastIndex = 999
                }
                var a = this.slideNavDatas[i].startIndex;
                var b = this.slideActiveIndex;
                var c = this.slideNavDatas[i].lastIndex;
                if (a <= b && b < c) {
                    this.slideNavActiveIndex = i;
                    break;
                }

            }
        },
        paginationBulletRender: (swiper, index, className) => {
            var text = index + 1
            //var lightClass = swiper.container[0].children[0].children[index].children[0].children[1].children[3].children[0].className
            var lightClass = swiper.container[0].children[0].children[index].children[1].children[3].children[0].className
            var lightColor = lightClass.split(" ")[1];
            var colorStyle;
            if (lightColor == "rate-red") { colorStyle = "background:#C92100" }
            else if (lightColor == "rate-green") { colorStyle = "background:#62A420" }
            else if (lightColor == "rate-orange") { colorStyle = "background:#F57600" }
            else if (lightColor == "rate-gray") { colorStyle = "background:#747474" }
            return '<span class="swiper-pagination-handle" index="'+index+'"><span class="'+className+'" style="width:30px;height:30px;text-align: center;line-height: 30px;font-size: 12px;color:#FFF;opacity: 1;' + colorStyle + '">' + text + '</span></span>';
  
        },
        coverflow: {
            rotate: 0,
            stretch: 0,
            depth: 50,
            modifier: 1,
            slideShadows: false
        },pagination: '.swiper-pagination',
        paginationClickable: true,
    };

    ngOnInit() {
        this.baseDataService.clickCosting(localStorage.getItem('currentUser'))
        if (window.screen.width < 737) {
            this.mode = "touch"
        }
        //房产区域列表
        this.costingServices.getUnitNames().then(response => {
            this.unitNames = response as any;
            if (this.unitNames) {
                this.unitName = this.unitNames[0];
            }
            //项目列表
            this.getProjectList(this.unitName);
        })

        //主数据
        this.costingServices.getCostMain().then(response => {
            this.datas = response;
            this.setChatDatas();
            this.setAreaIndex(response);
        })
    }
    ngAfterViewInit() {
        setTimeout(() => {
            this.chatHeight = (this.colRight as any).nativeElement.clientHeight;
        }, 2000);
    }
    ngOnChanges(changes) {
        console.log(changes);
    }

    //项目列表
    getProjectList(unitName) {
        let params = new URLSearchParams();
        params.append('unitName', unitName)
        this.costingServices.getVnames(params).then(response => {
            this.vNames = response as any;
            if (this.vNames) {
                this.vName = this.vNames[0]
            }
            this.getGcfx(this.vName)
            this.getJzdf(this.typeName);
        })
    }

    //构成分析
    getGcfx(vName) {
        this.costingServices.getGcfx(vName).then(response => {
            this.gcfxDatas = response;
            let obj = new Array();
            for (var i in response) {
                if (response[i].typeName2 != ' 合计') {
                    obj.push(response[i]);
                }
            }
            this.gcfxPieDatas = obj;
        })
    }

    //建筑单方
    getJzdf(typename2) {
        this.costingServices.getJzdf(typename2).then(response => {
            this.JzdfDatas = response;
        })
    }

    //柱状图
    setChatDatas() {
        this.costingServices.getCostDtcbDfdb(this.yTypes).then(args =>{
                    let array = new Array();
        for (var i in args) {
            let obj = new Object as any;
            obj.vname = args[i].vname;
            obj.salse = args[i].dtnnrpelembusinmy / args[i].nsalearea;
            obj.build = args[i].dtnnrpelembusinmy / args[i].nbuildarea;
            array.push(obj);
        }
        this.chartDatas = array;
        })

    }

    //设置业态类型
    changeYtype(yTypes){
        this.yTypes = yTypes;
        this.setChatDatas()
    }

    //点击饼图
    piePointClick(e) {
        this.typeName = e.target.argument;
        this.getJzdf(e.target.argument)
    }

    //点击柱状图
    columnClick(e) {
        this.typeName = e.target.argument;
        this.vName = e.target.argument;
        this.getGcfx(e.target.argument);
    }

    //构成分析改变板块
    onSelectUnit(unitName) {
        this.unitName = unitName;
        this.getProjectList(unitName);
    }
    //构成分析改变项目
    onSelectProject(vName) {
        this.vName = vName;
        this.getGcfx(vName);
    }

    //穿透到动态成本报表
    goDtTable(unitname, projectname) {
        this.router.navigate(['/Costing/CostingDtcbPorject', unitname, projectname])
    }

    //设置区域图片滚动下标
    setAreaIndex(res) {
        let array = new Array();

        let tempArea = '~!@#';
        for (var i = 0; i < res.length; i++) {
            // if (res[i].area == null) {
            //     res[i].area == "其他片区"
            // }
            if (res[i].area != null && res[i].area.indexOf(tempArea) < 0) {
                let obj = new Object() as any;
                tempArea = res[i].area == null ? "其他片区" : res[i].area;
                obj.name = res[i].area;
                obj.startIndex = i
                if (i > 0) {
                    array[array.length - 1].lastIndex = i;
                }
                array.push(obj);
            } else if (res[i].area == null && "其他片区".indexOf(tempArea) < 0) {
                let obj = new Object() as any;
                tempArea = "其他片区";
                obj.name = "其他片区";
                obj.startIndex = i
                if (i > 0) {
                    array[array.length - 1].lastIndex = i;
                }
                array.push(obj);
            }
        }
        this.slideNavDatas = array;
    }

    areaNavStyle() {
        return true;
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
                let obj = new Array();
                let argSizeb = args.length;
                for (var x = 0; x < argSizeb; x++) {
                    obj.push(args.shift());
                }
                rowArray.push(obj);
            } else {
                let obj = new Array();
                for (var x = 0; x < 4; x++) {
                    obj.push(args.shift());
                }
                rowArray.push(obj);
            }
        }
        this.rowDatas = rowArray;
    }

    customizeLabel(point) {
        return point.argumentText + ": " + point.percentText;
    }

    columnTooltip(arg: any) {
        return {
            text: arg.seriesName + ' <br>' + arg.argument + ': ' + Math.round(arg.value) + '元/m²'
        };
    }
    pieTooltip(arg: any) {
        return {
            text: arg.argumentText + "<br/>" + arg.valueText
        };
    }
    chartTitleClick() {
        alert(1);
    }


    //滚动窗事件
    moveTo(index) {
        //this.swiperWapper.swiper.slideTo(index);
        this.componentRef.setIndex(index);
    }

    //滚动卡片
    changeRolling(){
        this.rolling == true ? this.componentRef.stopAutoplay() : this.componentRef.startAutoplay();
        this.rolling == true ? this.rolling = false : this.rolling = true;
       
    }

}