import { TestBed, inject } from '@angular/core/testing';

import { LoadingComponent } from './loading.component';

describe('a loading component', () => {
	let component: LoadingComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				LoadingComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([LoadingComponent], (LoadingComponent) => {
		component = LoadingComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});