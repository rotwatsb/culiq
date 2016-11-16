import { Component, OnInit } from '@angular/core';

import { Translation } from './translation';

import { TranslationService } from './translation.service';

@Component({
		moduleId: module.id,
    selector: 'my-translations',
		templateUrl: 'translations.component.html',
})

export class TranslationsComponent implements OnInit {

		constructor(
				private translationService: TranslationService,
		) { }

		translations: Translation[];
		errorMessage: string;
		
		getTranslations(): void {
				this.translationService.getTranslations()
						.subscribe(
								translations => this.translations = translations,
								error => this.errorMessage = <any>error);
		}

		ngOnInit(): void {
				this.getTranslations();
		}

}
