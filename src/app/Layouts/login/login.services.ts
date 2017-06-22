import { User } from './../../Models/User';
import { Injectable } from '@angular/core'
import { Headers, Http, Response } from '@angular/http'
import { GlobalVariable } from '../../const'

import 'rxjs/add/operator/toPromise';

@Injectable()
export class LoginService {
    user: User;
    private url = GlobalVariable.ServerAddress+'login/loginauth'
   // private url = 'http://172.22.31.36:8080/login/loginauth';
    private handleError(error:any): Promise<any>{
        console.error("登陆服务错误:",error);
        return Promise.reject(error.message || error);
    }

    constructor(private http:Http){
    }
    
     login(username: string, password: string) {
        return this.http.post(this.url, JSON.stringify({ username: username, password: password }))
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                let user = response.json();
                console.log(user);
                if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(username));
                }
            });
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
    getAuth(username,password): Promise<User>{
        return this.http.get(this.url+ "?username="+username+"&password="+encodeURI(password))
                    .toPromise()
                    .then(response => {
                        return response.json() as User
                    }
                    )
                    .catch(this.handleError);
    }
}