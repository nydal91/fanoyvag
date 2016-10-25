import { FanoyvagPage } from './app.po';

describe('fanoyvag App', function() {
  let page: FanoyvagPage;

  beforeEach(() => {
    page = new FanoyvagPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
