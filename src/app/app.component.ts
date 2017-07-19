import { BaseDataService } from 'app/Services/basedata.service';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Location } from '@angular/common';
import { Marketing } from './Layouts/Marketing/marketing.component'
import { MarketingService } from './Layouts/Marketing/marketing.services'
import { MarketingDatas } from "app/Models/marketing";
import { LoginService } from "app/Layouts/login/login.services";
import { CostingServices } from "app/Layouts/Costing/costing.service";
import { Router } from "@angular/router";
import { CheckRightService } from "app/Services/checkright.service";

declare var device;

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MarketingService, LoginService, BaseDataService, CostingServices]
})
export class AppComponent implements OnInit {
  marketingDatas: Object;
  hasSubNavbar = false;
  location: Location;
  selectedYear;
  userInfo;



  constructor(
    location: Location,
    private loginService: LoginService,
    private baseDataService: BaseDataService,
    private marketingService: MarketingService,
    private checkRightService: CheckRightService,
    private router: Router
  ) {
    this.location = location;
    this.marketingService.getMarketingMainData()
      .then(marketingDatas => {
        this.marketingDatas = marketingDatas;
      })
  }

  ngOnInit() {
    document.addEventListener("deviceready", onDeviceReady, false);
    function onDeviceReady() {
      localStorage.setItem("platform", device.platform);
      localStorage.setItem("uuid", device.uuid);
      localStorage.setItem("version", device.version);
      localStorage.setItem("manufacturer", device.manufacturer);
      localStorage.setItem("serial", device.serial);
    }
    this.getUserInfo();
  }
  ngAfterViewInit() {
    // After the view is initialized, this.userProfile will be available
  }
  navGoBack(): void {
    this.location.back();
  }
  logOut() {
    this.loginService.logout();
  }

  getUserInfo() {
    var userName = localStorage.getItem('currentUser')
    this.userInfo = this.checkRightService.checkUserRights(userName).then(() => {
    }
    );
  }




}