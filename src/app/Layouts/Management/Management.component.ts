import { BaseDataService } from './../../Services/basedata.service';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'Management',
	templateUrl: 'Management.component.html',
	styleUrls:['Management.component.css'],
	providers:[BaseDataService]
})

export class ManagementComponent implements OnInit {
	ngOnInit(){
		
	}
}