import { TestBed, inject } from '@angular/core/testing';

import { ManageRoleComponent } from './manage-role.component';

describe('a manage-role component', () => {
	let component: ManageRoleComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				ManageRoleComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([ManageRoleComponent], (ManageRoleComponent) => {
		component = ManageRoleComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});