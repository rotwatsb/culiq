"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var Observable_1 = require('rxjs/Observable');
require('rxjs/add/operator/map');
require('rxjs/add/operator/catch');
require('rxjs/add/operator/toPromise');
var TranslationService = (function () {
    function TranslationService(http) {
        this.http = http;
        this.translationsUrl = 'http://127.0.0.1:8000/translations/.json';
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
    }
    TranslationService.prototype.getTranslations = function () {
        return this.http.get(this.translationsUrl)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    TranslationService.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof http_1.Response) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable_1.Observable.throw(errMsg);
    };
    TranslationService.prototype.create = function (foreign_text) {
        return this.http
            .post(this.translationsUrl, JSON.stringify({ foreign_text: foreign_text }), { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json().data; })
            .catch(this.handleError);
    };
    TranslationService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], TranslationService);
    return TranslationService;
}());
exports.TranslationService = TranslationService;
//# sourceMappingURL=translation.service.js.map