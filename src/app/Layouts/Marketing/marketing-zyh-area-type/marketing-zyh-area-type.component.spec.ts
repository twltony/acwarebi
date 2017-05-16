import { TestBed, inject } from '@angular/core/testing';

import { MarketingZyhAreaTypeComponent } from './marketing-zyh-area-type.component';

describe('a marketing-zyh-area-type component', () => {
	let component: MarketingZyhAreaTypeComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				MarketingZyhAreaTypeComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([MarketingZyhAreaTypeComponent], (MarketingZyhAreaTypeComponent) => {
		component = MarketingZyhAreaTypeComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});