import { TestBed, inject } from '@angular/core/testing';

import { MarketingZyhProjectComponent } from './marketing-zyh-project.component';

describe('a marketing-zyh-project component', () => {
	let component: MarketingZyhProjectComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				MarketingZyhProjectComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([MarketingZyhProjectComponent], (MarketingZyhProjectComponent) => {
		component = MarketingZyhProjectComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});