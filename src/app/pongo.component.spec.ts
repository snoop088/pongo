import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { PongoAppComponent } from '../app/pongo.component';

beforeEachProviders(() => [PongoAppComponent]);

describe('App: Pongo', () => {
  it('should create the app',
      inject([PongoAppComponent], (app: PongoAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'pongo works!\'',
      inject([PongoAppComponent], (app: PongoAppComponent) => {
    expect(app.title).toEqual('pongo works!');
  }));
});
