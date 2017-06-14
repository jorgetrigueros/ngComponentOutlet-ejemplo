import { NgComponentOutletEjemploPage } from './app.po';

describe('ng-component-outlet-ejemplo App', () => {
  let page: NgComponentOutletEjemploPage;

  beforeEach(() => {
    page = new NgComponentOutletEjemploPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
