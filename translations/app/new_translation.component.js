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
var translation_service_1 = require('./translation.service');
var NewTranslationComponent = (function () {
    function NewTranslationComponent(translationService) {
        this.translationService = translationService;
    }
    NewTranslationComponent.prototype.add = function (foreign_text) {
        foreign_text = foreign_text.trim();
        if (!foreign_text) {
            return;
        }
        this.translationService.create(foreign_text)
            .then(function (translation) { return null; });
    };
    NewTranslationComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-new_translation',
            templateUrl: 'new_translation.component.html'
        }), 
        __metadata('design:paramtypes', [translation_service_1.TranslationService])
    ], NewTranslationComponent);
    return NewTranslationComponent;
}());
exports.NewTranslationComponent = NewTranslationComponent;
//# sourceMappingURL=new_translation.component.js.map