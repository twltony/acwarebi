import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BaseDataService } from 'app/Services/basedata.service';
import { CheckRightService } from 'app/Services/checkright.service';
import { User } from 'app/Models/User';
import { LoginService } from 'app/Layouts/login/login.services';

@Component({
  selector: 'app-thirdparty-sign-on',
  templateUrl: './thirdparty-sign-on.component.html',
  styleUrls: ['./thirdparty-sign-on.component.css']
})
export class ThirdpartySignOnComponent implements OnInit {
  showspinner = false;
  user = new User();
  result;
  errorMessage;
  loginError;


  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private baseDataService: BaseDataService,
    private loginService: LoginService,
    private checkRightService: CheckRightService
  ) { }

  ngOnInit() {
    this.goPageAccess();
  }

  goPageAccess() {
    this.route.params.subscribe(params => {
      if ((params as any).username) {
        this.user._userName = (params as any).username;
        this.showspinner = true;
        localStorage.setItem('currentUser', this.user._userName);
        this.getRights(this.user._userName)
        this.loginService.setCount(this.user._userName);
        this.showspinner = false;
      }
    })
  }

  getRights(username) {
    this.checkRightService.checkUserRights(username).then(() => {
      if (this.checkRightService.marketingRight == true) {
        this.router.navigate(['/Marketing']);
        return;
      } else if (this.checkRightService.costingRight == true) {
        this.router.navigate(['/Costing']);
        return;
      } else if (this.checkRightService.tenderRight == true) {
        this.router.navigate(['/Tendering']);
        return;
      } else if (this.checkRightService.hrRight == true) {
        this.router.navigate(['/HumanResources']);
        return;
      } else if (this.checkRightService.propertyRight == true) {
        this.router.navigate(['/Property']);
        return;
      } else if (this.checkRightService.managermentRight == true) {
        this.router.navigate(['/Management']);
        return;
      } else {
        this.router.navigate(['/NoRight'])
      }
    }
    );
  }

}
