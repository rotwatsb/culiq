import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TranslationsComponent } from './translations.component';
import { NewTranslationComponent } from './new_translation.component';

import { TranslationService } from './translation.service';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
    imports: [
				BrowserModule,
				AppRoutingModule,
				HttpModule,
		],
    declarations: [
				AppComponent,
				TranslationsComponent,
				NewTranslationComponent,
		],
		providers: [
				TranslationService,
		],
		bootstrap: [
				AppComponent
		]
})

export class AppModule { }

