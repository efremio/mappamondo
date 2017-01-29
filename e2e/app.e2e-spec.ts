import { MappamondoPage } from './app.po';

describe('mappamondo App', function() {
  let page: MappamondoPage;

  beforeEach(() => {
    page = new MappamondoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
