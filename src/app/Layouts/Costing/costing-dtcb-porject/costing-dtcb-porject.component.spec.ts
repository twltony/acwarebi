import { TestBed, inject } from '@angular/core/testing';

import { CostingDtcbPorjectComponent } from './costing-dtcb-porject.component';

describe('a costing-dtcb-porject component', () => {
	let component: CostingDtcbPorjectComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				CostingDtcbPorjectComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([CostingDtcbPorjectComponent], (CostingDtcbPorjectComponent) => {
		component = CostingDtcbPorjectComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});