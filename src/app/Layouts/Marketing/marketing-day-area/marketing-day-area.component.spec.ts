import { TestBed, inject } from '@angular/core/testing';

import { MarketingDayAreaComponent } from './marketing-day-area.component';

describe('a marketing-day-area component', () => {
	let component: MarketingDayAreaComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				MarketingDayAreaComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([MarketingDayAreaComponent], (MarketingDayAreaComponent) => {
		component = MarketingDayAreaComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});