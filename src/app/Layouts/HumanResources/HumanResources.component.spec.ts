import { TestBed, inject } from '@angular/core/testing';

import { HumanResourcesComponent } from './HumanResources.component';

describe('a HumanResources component', () => {
	let component: HumanResourcesComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				HumanResourcesComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([HumanResourcesComponent], (HumanResourcesComponent) => {
		component = HumanResourcesComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});