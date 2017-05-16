import { TestBed, inject } from '@angular/core/testing';

import { MarketingMonthFeeComponent } from './marketing-month-fee.component';

describe('a marketing-month-fee component', () => {
	let component: MarketingMonthFeeComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				MarketingMonthFeeComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([MarketingMonthFeeComponent], (MarketingMonthFeeComponent) => {
		component = MarketingMonthFeeComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});