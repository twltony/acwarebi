import { TestBed, inject } from '@angular/core/testing';

import { MarketingRankingComponent } from './marketing-ranking.component';

describe('a marketing-ranking component', () => {
	let component: MarketingRankingComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				MarketingRankingComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([MarketingRankingComponent], (MarketingRankingComponent) => {
		component = MarketingRankingComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});