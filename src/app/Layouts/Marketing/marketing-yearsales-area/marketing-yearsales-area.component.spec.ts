import { TestBed, inject } from '@angular/core/testing';

import { MarketingYearsalesAreaComponent } from './marketing-yearsales-area.component';

describe('a marketing-yearsales-area component', () => {
	let component: MarketingYearsalesAreaComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				MarketingYearsalesAreaComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([MarketingYearsalesAreaComponent], (MarketingYearsalesAreaComponent) => {
		component = MarketingYearsalesAreaComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});