import { TestBed, inject } from '@angular/core/testing';

import { MarketingDayProjectComponent } from './marketing-day-project.component';

describe('a marketing-day-project component', () => {
	let component: MarketingDayProjectComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				MarketingDayProjectComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([MarketingDayProjectComponent], (MarketingDayProjectComponent) => {
		component = MarketingDayProjectComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});