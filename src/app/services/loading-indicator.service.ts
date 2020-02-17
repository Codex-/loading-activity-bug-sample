import { Injectable } from '@angular/core';
import { LoadingIndicator, OptionsCommon, Mode } from '@nstudio/nativescript-loading-indicator';

@Injectable()
export class LoadingIndicatorService {
	private isShowing = false;
	private loadingIndicator: LoadingIndicator;

	constructor() {
		this.loadingIndicator = new LoadingIndicator();
	}

	public show(message?: string) {
		if (this.isShowing) {
			return;
		}
		const options: OptionsCommon = {
			message: message,
			dimBackground: true,
			color: '#000000',
			mode: Mode.Indeterminate,
			android: {
				cancelable: false,
			},
			ios: {
				square: false,
			},
		};
		this.loadingIndicator.show(options);
		this.isShowing = true;
	}

	public hide() {
		console.log('Time to hide!');
		this.loadingIndicator.hide();
		this.isShowing = false;
	}
}
