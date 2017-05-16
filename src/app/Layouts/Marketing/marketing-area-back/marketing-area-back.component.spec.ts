import { TestBed, inject } from '@angular/core/testing';

import { MarketingAreaBackComponent } from './marketing-area-back.component';

describe('a marketing-area-back component', () => {
	let component: MarketingAreaBackComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				MarketingAreaBackComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([MarketingAreaBackComponent], (MarketingAreaBackComponent) => {
		component = MarketingAreaBackComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});