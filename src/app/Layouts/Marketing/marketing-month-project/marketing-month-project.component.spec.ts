import { TestBed, inject } from '@angular/core/testing';

import { MarketingMonthProjectComponent } from './marketing-month-project.component';

describe('a marketing-month-project component', () => {
	let component: MarketingMonthProjectComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				MarketingMonthProjectComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([MarketingMonthProjectComponent], (MarketingMonthProjectComponent) => {
		component = MarketingMonthProjectComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});