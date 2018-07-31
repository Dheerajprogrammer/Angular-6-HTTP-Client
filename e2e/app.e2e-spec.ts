import { Ng6ProjPage } from './app.po';

describe('ng6-proj App', () => {
  let page: Ng6ProjPage;

  beforeEach(() => {
    page = new Ng6ProjPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
