import { TestBed, inject } from '@angular/core/testing';

import { MarketingQzyhAreaComponent } from './marketing-qzyh-area.component';

describe('a marketing-qzyh-area component', () => {
	let component: MarketingQzyhAreaComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				MarketingQzyhAreaComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([MarketingQzyhAreaComponent], (MarketingQzyhAreaComponent) => {
		component = MarketingQzyhAreaComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});