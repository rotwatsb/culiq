import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import { Translation } from './translation';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class TranslationService {
		private translationsUrl = 'http://127.0.0.1:8000/translations/.json'

		private headers = new Headers({'Content-Type': 'application/json'});

		constructor(private http: Http) { }
		
		getTranslations(): Observable<Translation[]> {
				return this.http.get(this.translationsUrl)
						.map(response => response.json())
						.catch(this.handleError);
		}
		
		private handleError(error: Response | any) {
				let errMsg: string;
				if (error instanceof Response) {
						const body = error.json() || '';
						const err = body.error || JSON.stringify(body);
						errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
				} else {
						errMsg = error.message ? error.message : error.toString();
				}
				console.error(errMsg);
				return Observable.throw(errMsg);
		}
		
		
		create(foreign_text: string): Promise<Translation> {
				return this.http
						.post(this.translationsUrl, JSON.stringify({foreign_text: foreign_text}), {headers: this.headers})
						.toPromise()
						.then(res => res.json().data)
						.catch(this.handleError);
		}
}

