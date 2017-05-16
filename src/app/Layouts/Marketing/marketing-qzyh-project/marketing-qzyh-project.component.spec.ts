import { TestBed, inject } from '@angular/core/testing';

import { MarketingQzyhProjectComponent } from './marketing-qzyh-project.component';

describe('a marketing-qzyh-project component', () => {
	let component: MarketingQzyhProjectComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				MarketingQzyhProjectComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([MarketingQzyhProjectComponent], (MarketingQzyhProjectComponent) => {
		component = MarketingQzyhProjectComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});