import { TestBed, inject } from '@angular/core/testing';

import { CostingMainComponent } from './costing-main.component';

describe('a costing-main component', () => {
	let component: CostingMainComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				CostingMainComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([CostingMainComponent], (CostingMainComponent) => {
		component = CostingMainComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});