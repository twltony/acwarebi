import { TestBed, inject } from '@angular/core/testing';

import { ManageSubjectComponent } from './manage-subject.component';

describe('a manage-subject component', () => {
	let component: ManageSubjectComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				ManageSubjectComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([ManageSubjectComponent], (ManageSubjectComponent) => {
		component = ManageSubjectComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});