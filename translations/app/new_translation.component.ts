import { Component, OnInit } from '@angular/core';

import { Translation } from './translation';

import { TranslationService } from './translation.service';

@Component({
		moduleId: module.id,
		selector: 'my-new_translation',
		templateUrl: 'new_translation.component.html'
})

export class NewTranslationComponent {

		constructor(
				private translationService: TranslationService,
		) { }

		add(foreign_text: string): void {
				foreign_text = foreign_text.trim();
				if (!foreign_text) { return; }
				this.translationService.create(foreign_text)
						.then(translation => null)
		}

}
