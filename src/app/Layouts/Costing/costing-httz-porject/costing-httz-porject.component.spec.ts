import { TestBed, inject } from '@angular/core/testing';

import { CostingHttzPorjectComponent } from './costing-httz-porject.component';

describe('a costing-httz-porject component', () => {
	let component: CostingHttzPorjectComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				CostingHttzPorjectComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([CostingHttzPorjectComponent], (CostingHttzPorjectComponent) => {
		component = CostingHttzPorjectComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});