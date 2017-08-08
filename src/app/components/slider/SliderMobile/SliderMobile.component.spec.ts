import { TestBed, inject } from '@angular/core/testing';

import { SliderMobileComponent } from './SliderMobile.component';

describe('a SliderMobile component', () => {
	let component: SliderMobileComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				SliderMobileComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([SliderMobileComponent], (SliderMobileComponent) => {
		component = SliderMobileComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});