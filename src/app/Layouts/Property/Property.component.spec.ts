import { TestBed, inject } from '@angular/core/testing';

import { PropertyComponent } from './Property.component';

describe('a Property component', () => {
	let component: PropertyComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				PropertyComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([PropertyComponent], (PropertyComponent) => {
		component = PropertyComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});