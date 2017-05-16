import { TestBed, inject } from '@angular/core/testing';

import { ManagementComponent } from './Management.component';

describe('a Management component', () => {
	let component: ManagementComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				ManagementComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([ManagementComponent], (ManagementComponent) => {
		component = ManagementComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});