import { TestBed, inject } from '@angular/core/testing';

import { MarketingYearBackComponent } from './marketing-year-back.component';

describe('a marketing-year-back component', () => {
	let component: MarketingYearBackComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				MarketingYearBackComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([MarketingYearBackComponent], (MarketingYearBackComponent) => {
		component = MarketingYearBackComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});