import { TestBed, inject } from '@angular/core/testing';

import { AccessLoggerComponent } from './AccessLogger.component';

describe('a AccessLogger component', () => {
	let component: AccessLoggerComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				AccessLoggerComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([AccessLoggerComponent], (AccessLoggerComponent) => {
		component = AccessLoggerComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});