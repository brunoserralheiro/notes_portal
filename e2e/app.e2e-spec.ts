import { NotesPortalPage } from './app.po';

describe('notes-portal App', function() {
  let page: NotesPortalPage;

  beforeEach(() => {
    page = new NotesPortalPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
