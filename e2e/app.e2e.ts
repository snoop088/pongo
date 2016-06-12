import { PongoPage } from './app.po';

describe('pongo App', function() {
  let page: PongoPage;

  beforeEach(() => {
    page = new PongoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('pongo works!');
  });
});
