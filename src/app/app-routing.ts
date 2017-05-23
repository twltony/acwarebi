import { MarketingZyhProjectComponent } from './Layouts/Marketing/marketing-zyh-project/marketing-zyh-project.component';
import { MarketingQzyhProjectComponent } from './Layouts/Marketing/marketing-qzyh-project/marketing-qzyh-project.component';
import { MarketingQzyhAreaComponent } from './Layouts/Marketing/marketing-qzyh-area/marketing-qzyh-area.component';
import { MarketingRankingComponent } from './Layouts/Marketing/marketing-ranking/marketing-ranking.component';
import { MarketingZyhAreaTypeComponent } from './Layouts/Marketing/marketing-zyh-area-type/marketing-zyh-area-type.component';
import { MarketingYearBackComponent } from './Layouts/Marketing/marketing-year-back/marketing-year-back.component';
import { MarketingMonthFeeComponent } from './Layouts/Marketing/marketing-month-fee/marketing-month-fee.component';
import { MarketingMonthAreaComponent } from './Layouts/Marketing/marketing-month-area/marketing-month-area.component';
import { MarketingDayAreaComponent } from './Layouts/Marketing/marketing-day-area/marketing-day-area.component';
import { ManageSubjectComponent } from './Layouts/Management/manage-subject/manage-subject.component';
import { ManageRoleComponent } from './Layouts/Management/manage-role/manage-role.component';
import { ManageUsersComponent } from './Layouts/Management/manage-users/manage-users.component';
import { ManagementComponent } from './Layouts/Management/Management.component';
import { AuthGuard } from './Guards/auth.guard';
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Marketing } from "./Layouts/Marketing/marketing.component";
import { MarketDaySell } from "./Layouts/Marketing/Pages/market-daysell.component";
import { Costing } from "./Layouts/Costing/costing.component";
import { Tendering } from "./Layouts/Tendering/tendering.component";
import { LoginForm } from "app/Layouts/login/app.component.login";
import { MarketingMonthProjectComponent } from "app/Layouts/Marketing/marketing-month-project/marketing-month-project.component";
import { MarketingDayProjectComponent } from "app/Layouts/Marketing/marketing-day-project/marketing-day-project.component";
import { MarketingAreaBackComponent } from "app/Layouts/Marketing/marketing-area-back/marketing-area-back.component";
import { MarketingYearsalesAreaComponent } from "app/Layouts/Marketing/marketing-yearsales-area/marketing-yearsales-area.component";
import { CostingMainComponent } from "app/Layouts/Costing/costing-main/costing-main.component";
import { CostingDtcbPorjectComponent } from "app/Layouts/Costing/costing-dtcb-porject/costing-dtcb-porject.component";
import { CostingHttzPorjectComponent } from "app/Layouts/Costing/costing-httz-porject/costing-httz-porject.component";



const appRoutes: Routes = [
  { path:"", component: LoginForm },
  { path:"Marketing", component: Marketing, canActivate: [AuthGuard] },
        { path:"MarketDaySell", component: MarketDaySell, canActivate: [AuthGuard] },
        { path:"MarketingYearsalesArea/:area", component: MarketingYearsalesAreaComponent, canActivate: [AuthGuard] },
        { path:"MarketingDayArea", component: MarketingDayAreaComponent, canActivate: [AuthGuard] },
        { path:"MarketingMonthArea/:month", component: MarketingMonthAreaComponent, canActivate: [AuthGuard] },
        { path:"MarketingMonthFee", component: MarketingMonthFeeComponent, canActivate: [AuthGuard] },
        { path:"MarketingYearBack", component: MarketingYearBackComponent, canActivate: [AuthGuard] },
        { path:"MarketingZyhAreaType", component: MarketingZyhAreaTypeComponent, canActivate: [AuthGuard] },
        { path:"MarketingZyhProject/:area", component: MarketingZyhProjectComponent, canActivate: [AuthGuard] },
        { path:"MarketingRanking", component: MarketingRankingComponent, canActivate: [AuthGuard] },
        { path:"MarketingQzyhArea/:type", component: MarketingQzyhAreaComponent, canActivate: [AuthGuard] },
        { path:"MarketingMonthProject/:area/:month", component: MarketingMonthProjectComponent, canActivate: [AuthGuard] },
        { path:"MarketingDayProject/:area", component: MarketingDayProjectComponent, canActivate: [AuthGuard] },
        { path:"MarketingAreaBack/:area", component: MarketingAreaBackComponent, canActivate: [AuthGuard] },
        { path:"MarketingQzyhProject/:area/:type", component: MarketingQzyhProjectComponent, canActivate: [AuthGuard] },
  { path:"Costing", component: Costing,canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: 'CostingMain', pathMatch: 'full' },
      { path:"CostingMain", component: CostingMainComponent ,canActivate: [AuthGuard] },
      { path:"CostingDtcbPorject/:unitname/:vname", component: CostingDtcbPorjectComponent, canActivate: [AuthGuard] },
      { path:"CostingHttz/:unitname/:vname", component: CostingHttzPorjectComponent, canActivate: [AuthGuard] },
    ]
  },
  { path:"Tendering", component: Tendering,canActivate: [AuthGuard] },
  { path:"Management", component: ManagementComponent,canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: 'ManagementUsers', pathMatch: 'full' },
      { path:"ManagementUsers", component: ManageUsersComponent,canActivate: [AuthGuard] },
      { path:"ManagementRole", component: ManageRoleComponent,canActivate: [AuthGuard] },
      { path:"ManagementSubject", component: ManageSubjectComponent,canActivate: [AuthGuard] }
    ]
 },
  { path:"**", redirectTo: ""}
];

@NgModule({
  imports: [ RouterModule.forRoot(appRoutes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}