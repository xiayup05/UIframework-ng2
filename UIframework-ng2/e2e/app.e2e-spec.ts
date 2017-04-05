import { CaidanPage } from './app.po';

describe('caidan App', () => {
  let page: CaidanPage;

  beforeEach(() => {
    page = new CaidanPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
