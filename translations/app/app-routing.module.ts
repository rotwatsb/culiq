import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TranslationsComponent } from './translations.component';
import { NewTranslationComponent } from './new_translation.component';

const routes: Routes = [
    {
	path: 'translations',
	component: TranslationsComponent,
    },
    {
	path: 'new_translation',
	component: NewTranslationComponent,
    },
    {
	path: '',
	redirectTo: '/translations',
	pathMatch: 'full'
    },
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})

export class AppRoutingModule {}
