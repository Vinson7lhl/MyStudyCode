import { Angular4TestPage } from './app.po';

describe('angular4-test App', () => {
  let page: Angular4TestPage;

  beforeEach(() => {
    page = new Angular4TestPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
