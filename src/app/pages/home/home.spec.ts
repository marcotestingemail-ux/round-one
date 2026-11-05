import { TestBed } from '@angular/core/testing';
import { Home } from './home';
import { SITE } from '../../data/site';

describe('Home', () => {
  it('shows the site name and tagline from the data file', async () => {
    const fixture = TestBed.createComponent(Home);
    await fixture.whenStable();
    const el = fixture.nativeElement as HTMLElement;
    expect(el.querySelector('h1')?.textContent).toContain(SITE.name);
    expect(el.textContent).toContain(SITE.tagline);
  });
});
