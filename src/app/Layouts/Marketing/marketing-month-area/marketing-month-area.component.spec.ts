import { TestBed, inject } from '@angular/core/testing';

import { MarketingMonthAreaComponent } from './marketing-month-area.component';

describe('a marketing-month-area component', () => {
	let component: MarketingMonthAreaComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				MarketingMonthAreaComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([MarketingMonthAreaComponent], (MarketingMonthAreaComponent) => {
		component = MarketingMonthAreaComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});