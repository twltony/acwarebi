import {BaseDataService} from '../../Services/basedata.service';
/**
 * Created by Tony on 2017/3/8.
 */
import { Component, AfterViewChecked } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.services'
import { GlobalVariable } from '../../const'
import { User } from "app/Models/User";
import { CheckRightService } from "app/Services/checkright.service";

@Component({
    selector: '<ac-loginform></ac-loginform>',
    styleUrls: ['app.component.login.css'],
    templateUrl: 'app.component.login.html',
    providers: [LoginService]
})
export class LoginForm implements AfterViewChecked {
    user = new User()
    submitted = false;
    result;
    showspinner = false;
    loginError = false;
    errorMessage;
    model: any = {};
    returnUrl: string;

    constructor(
        private router: Router,
        private loginService: LoginService,
        private baseDataService: BaseDataService,
        private checkRightService: CheckRightService
    ) { }

    ngOnInit() {
        if(localStorage.getItem('currentUser')){
            this.getRights(localStorage.getItem('currentUser'))
            this.loginService.setCount(localStorage.getItem('currentUser'));
        }
    }

    onSubmit() {
        this.showspinner = true;
        this.submitted = true;
        this.loginService.getAuth(this.user._userName, this.user._passWord)
            .then(result => {
                this.result = result;
                let status = (result as any).status;
                if (status == "success") {
                    //localStorage.setItem('currentUser', JSON.stringify(user));
                    localStorage.setItem('currentUser', this.user._userName);
                    this.getRights(this.user._userName)
                    this.loginService.setCount(this.user._userName);
                } else {
                    this.errorMessage = (result as any).errMsg;
                    this.loginError = true;
                }
                this.showspinner = false;
            })
    }
    getRights(username) {
        this.checkRightService.checkUserRights(username).then(() => {
            if (this.checkRightService.marketingRight == true){
                this.router.navigate(['/Marketing']);
                //this.baseDataService.clickMarketing(this.checkRightService.userInfo._displayName)
                return;
            }else if (this.checkRightService.costingRight == true){
                this.router.navigate(['/Costing']);
                //this.baseDataService.clickCosting(this.checkRightService.userInfo._displayName)
                return;
            }else if (this.checkRightService.tenderRight == true){
                this.router.navigate(['/Tendering']);
                //this.baseDataService.clickTendering(this.checkRightService.userInfo._displayName)
                return;
            }else if (this.checkRightService.hrRight == true){
                this.router.navigate(['/HumanResources']);
                //this.baseDataService.clickHumanResources(this.checkRightService.userInfo._displayName)
                return;
            }else if (this.checkRightService.propertyRight == true){
                this.router.navigate(['/Property']);
                //this.baseDataService.clickProperty(this.checkRightService.userInfo._displayName)
                return;
            }else if (this.checkRightService.managermentRight == true){
                this.router.navigate(['/Management']);
                return;
            }else{
                this.router.navigate(['/NoRight'])
            }
        }
        );
    }

    ngAfterViewChecked() {
        // this.loginError = false;
    }

    submitForm() {
        alert('点击已经被提交!');
    }


}
