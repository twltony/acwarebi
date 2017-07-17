/**
 * Created by Tony on 2017/3/8.
 */
import { Component, AfterViewChecked } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.services'
import { GlobalVariable } from '../../const'
import { User } from "app/Models/User";

@Component({
    selector: '<ac-loginform></ac-loginform>',
    styleUrls: ['app.component.login.css'],
    templateUrl: 'app.component.login.html',
    providers:[LoginService]
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
        private loginService: LoginService
    ){}

     ngOnInit() {
   }

    onSubmit() {
        this.showspinner=true;
        this.submitted = true;
        this.loginService.getAuth(this.user._userName,this.user._passWord)
        .then(result => {
          this.result = result;
          let status = (result as any).status;
          if(status=="success"){
            //localStorage.setItem('currentUser', JSON.stringify(user));
            localStorage.setItem('currentUser', this.user._userName);
            this.router.navigate(['/Marketing']);
          }else{
            this.errorMessage = (result as any).errMsg;
            this.loginError = true;
          }
          this.showspinner=false;
      })
     }

      ngAfterViewChecked() {
       // this.loginError = false;
      }

    submitForm() {
            alert('点击已经被提交!');
        }


}
