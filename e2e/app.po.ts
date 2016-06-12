export class PongoPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('pongo-app h1')).getText();
  }
}
