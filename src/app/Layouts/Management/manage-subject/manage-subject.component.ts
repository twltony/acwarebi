import { WindowRefService } from './window.service';
import { Component, OnInit } from '@angular/core';
declare var cordova;

@Component({
	selector: 'manage-subject',
	templateUrl: 'manage-subject.component.html'
})
export class ManageSubjectComponent implements OnInit {

	constructor(windowref: WindowRefService) {

	}

	ngOnInit() {
		document.addEventListener("deviceready", onDeviceReady, false);
		function onDeviceReady() {
			// console.log(this.windowref);
			// console.log(window);

		}

	}

	weixin() {
		console.log("weixin");
		//window.location.href = "weixin://";
		document.addEventListener("deviceready", onDeviceReady, false);
		function onDeviceReady() {
			var ref = cordova.InAppBrowser.open('weixin://', '_system');
			// some time later...
			ref.show();
		}
	}
	kk() {
		console.log("打开KK");
		document.addEventListener("deviceready", onDeviceReady, false);
		function onDeviceReady() {
			var ref = cordova.InAppBrowser.open('KK://message', '_system');
			// some time later...
			ref.show();
		}
	}
	KKcontact() {
		console.log("打开KK通信录");
		document.addEventListener("deviceready", onDeviceReady, false);
		function onDeviceReady() {
			var ref = cordova.InAppBrowser.open('KK://contact', '_system');
			// some time later...
			ref.show();
		}
	}

	// Default handlers
	successCallback() {
		alert("Success!");
		// if calling canLaunch() with getAppList:true, data will contain an array named "appList" with the package names of applications that can handle the uri specified.
	};
	errorCallback() {
		alert("Error! ");
	}
}