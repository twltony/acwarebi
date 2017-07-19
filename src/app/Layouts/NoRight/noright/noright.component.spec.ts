import { TestBed, inject } from '@angular/core/testing';

import { NorightComponent } from './noright.component';

describe('a noright component', () => {
	let component: NorightComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				NorightComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([NorightComponent], (NorightComponent) => {
		component = NorightComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});