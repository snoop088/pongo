import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { disableDeprecatedForms, provideForms } from '@angular/forms';
import { PongoAppComponent, environment } from './app/';

if (environment.production) {
  enableProdMode();
}

bootstrap(PongoAppComponent, [
  disableDeprecatedForms(),
  provideForms()
]);

