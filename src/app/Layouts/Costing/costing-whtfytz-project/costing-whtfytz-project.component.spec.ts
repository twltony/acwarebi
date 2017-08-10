import { TestBed, inject } from '@angular/core/testing';

import { CostingWhtfytzProjectComponent } from './costing-whtfytz-project.component';

describe('a costing-whtfytz-project component', () => {
	let component: CostingWhtfytzProjectComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				CostingWhtfytzProjectComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([CostingWhtfytzProjectComponent], (CostingWhtfytzProjectComponent) => {
		component = CostingWhtfytzProjectComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});