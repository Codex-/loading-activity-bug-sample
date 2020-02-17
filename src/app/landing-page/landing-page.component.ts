import { Component } from '@angular/core';
import { LoadingIndicatorService } from '../services/loading-indicator.service';
import { RouterExtensions } from 'nativescript-angular/router';
import { TestNavService } from '../services/test-nav.service';

@Component({
	moduleId: module.id,
	selector: 'landing-page',
	templateUrl: 'landing-page.component.html',
})
export class LandingPageComponent {
	constructor(
		private loadingIndicatorService: LoadingIndicatorService,
		private testNavService: TestNavService
	) {}

	public onPress() {
		this.loadingIndicatorService.show('This should go away on the next page');
		this.testNavService.tryNav();
	}
}
