export const GlobalVariable = Object.freeze({
     show_nav: false,
    // ServerAddress: "http://172.22.31.36:8080/",
     ServerAddress: "http://172.16.0.25:8180/bi/",
 //    ServerAddress: "http://172.16.0.177:8180/bi/",
     offsetTop: ""
 });

import {Injectable} from "@angular/core";

 @Injectable() export class AppGlobals {
   public isUserLoggedIn: boolean = false;
   public offset: number;

   setOffset(height){
       this.offset = height;
   }
   getOffset(){
       return this.offset;
   }

   setLoginStatus(isLoggedIn){
       this.isUserLoggedIn = isLoggedIn;
   }

   getLoginStatus(){
       return this.isUserLoggedIn;
   } }