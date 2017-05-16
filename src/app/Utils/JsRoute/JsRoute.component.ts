import { Router } from '@angular/router';
import { Component } from '@angular/core';


export class JsRoute {
	constructor(
		private route:Router
	){

	}
	show(arg){
		this.route.navigate([arg]);
	}

}