import {BaseDataService} from './Services/basedata.service';
import { WindowRefService } from './Layouts/Management/manage-subject/window.service';
import { MarketingYearsalesAreaComponent } from './Layouts/Marketing/marketing-yearsales-area/marketing-yearsales-area.component';
import { MarketingZyhProjectComponent } from './Layouts/Marketing/marketing-zyh-project/marketing-zyh-project.component';
import { MarketingQzyhProjectComponent } from './Layouts/Marketing/marketing-qzyh-project/marketing-qzyh-project.component';
import { MarketingMonthProjectComponent } from './Layouts/Marketing/marketing-month-project/marketing-month-project.component';
import { MarketingRankingComponent } from './Layouts/Marketing/marketing-ranking/marketing-ranking.component';
import { MarketingQzyhAreaComponent } from './Layouts/Marketing/marketing-qzyh-area/marketing-qzyh-area.component';
import { MarketingZyhAreaTypeComponent } from './Layouts/Marketing/marketing-zyh-area-type/marketing-zyh-area-type.component';
import { ratePipe } from './Pipes/rate.pipe';
import { SafePipe } from './Pipes/safe.pipe';
import { MarketingMonthFeeComponent } from './Layouts/Marketing/marketing-month-fee/marketing-month-fee.component';
import { MarketingYearBackComponent } from './Layouts/Marketing/marketing-year-back/marketing-year-back.component';
import { MarketingDayAreaComponent } from './Layouts/Marketing/marketing-day-area/marketing-day-area.component';
import { MarketingMonthAreaComponent } from './Layouts/Marketing/marketing-month-area/marketing-month-area.component';
import { isOrNotPipe } from './Pipes/isOrNot.pipe';
import { ManageSubjectComponent } from './Layouts/Management/manage-subject/manage-subject.component';
import { ManageRoleComponent } from './Layouts/Management/manage-role/manage-role.component';
import { ManageUsersComponent } from './Layouts/Management/manage-users/manage-users.component';
import {DxCheckBoxModule, DxSelectBoxModule,  DxPivotGridModule,   DxChartModule,    DxDataGridModule,    DxTemplateModule,    DxPieChartModule,   DxTreeListModule} from 'devextreme-angular';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ClarityModule } from 'clarity-angular';
import { AppComponent } from './app.component';
import { Linechart } from "app/components/Charts/linechart.component";
import { Columnchart } from "app/components/Charts/columnchart.component";
import { Piechart } from "app/components/Charts/piechart.component";
import { Barchart } from "app/components/Charts/barchart.component";
import { RoundPipe } from "app/Pipes/round.pipe";
import { MarketDaySell } from './Layouts/Marketing/Pages/market-daysell.component';
import { Tendering } from './Layouts/Tendering/tendering.component';
import { Marketing } from './Layouts/Marketing/marketing.component';
import { Costing } from './Layouts/Costing/costing.component';
import { AppRoutingModule } from "app/app-routing";
import { ManagementComponent } from "app/Layouts/Management/Management.component";
import { AuthGuard } from "app/Guards/auth.guard";
import { LoginForm } from "app/Layouts/login/app.component.login";
import { MarketingDayProjectComponent } from "app/Layouts/Marketing/marketing-day-project/marketing-day-project.component";
import { MarketingAreaBackComponent } from "app/Layouts/Marketing/marketing-area-back/marketing-area-back.component";
import { CostingMainComponent } from "app/Layouts/Costing/costing-main/costing-main.component";
import { CostingDtcbPorjectComponent } from "app/Layouts/Costing/costing-dtcb-porject/costing-dtcb-porject.component";
import { CostingHttzPorjectComponent } from "app/Layouts/Costing/costing-httz-porject/costing-httz-porject.component";
import { LoadingComponent } from "app/components/loading/loading.component";
import { NorightComponent } from "app/Layouts/NoRight/noright/noright.component";
import { CheckRightService } from "app/Services/checkright.service";
import { PropertyComponent } from "app/Layouts/Property/Property.component";
import { HumanResourcesComponent } from "app/Layouts/HumanResources/HumanResources.component";
import { AccessLoggerComponent } from "app/Layouts/Management/AccessLogger/AccessLogger.component";

import { SwiperModule } from 'ngx-swiper-wrapper';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { CostingWhtfytzProjectComponent } from "app/Layouts/Costing/costing-whtfytz-project/costing-whtfytz-project.component";
import { ThirdpartySignOnComponent } from 'app/Layouts/thirdparty-sign-on/thirdparty-sign-on.component';

const SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 'auto',
  keyboardControl: true
};

@NgModule({
    declarations: [
        AppComponent,
        Marketing,
            MarketDaySell,
            MarketingYearsalesAreaComponent,
            MarketingMonthAreaComponent,
            MarketingDayAreaComponent,
            MarketingYearBackComponent,
            MarketingMonthFeeComponent,
            MarketingZyhAreaTypeComponent,
            MarketingQzyhAreaComponent,
            MarketingRankingComponent,
            MarketingMonthProjectComponent,
            MarketingDayProjectComponent,
            MarketingAreaBackComponent,
            MarketingQzyhProjectComponent,
            MarketingZyhProjectComponent,
        Costing,
            CostingMainComponent,
            CostingDtcbPorjectComponent,
            CostingHttzPorjectComponent,
            CostingWhtfytzProjectComponent,
        Tendering,
        ManagementComponent,
            ManageUsersComponent,
            ManageRoleComponent,
            ManageSubjectComponent,
            AccessLoggerComponent,
        HumanResourcesComponent,
        PropertyComponent,
        NorightComponent,
        Columnchart,
        Linechart,
        Piechart,
        Barchart,
        LoginForm,
        RoundPipe,
        isOrNotPipe,
        SafePipe,
        LoadingComponent,
        ratePipe,
        ThirdpartySignOnComponent
        
    ],
    imports: [
        BrowserAnimationsModule,
        BrowserModule,
        FormsModule,
        HttpModule,
        ClarityModule.forRoot(),
        DxDataGridModule, 
        DxTemplateModule,
        DxChartModule,
        DxPieChartModule,
        DxTreeListModule,
        DxDataGridModule,
        DxSelectBoxModule,
        DxCheckBoxModule,
        SwiperModule.forRoot(SWIPER_CONFIG),
        AppRoutingModule
    ],
    providers: [AuthGuard, WindowRefService, CheckRightService,BaseDataService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
