import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { HEADER } from '../../data/header';
import { Header } from './header';

describe('Header', () => {
  it('shows the brand, the links and the social icons', async () => {
    TestBed.configureTestingModule({ providers: [provideRouter([])] });
    const fixture = TestBed.createComponent(Header);
    await fixture.whenStable();

    const element: HTMLElement = fixture.nativeElement;
    expect(element.textContent).toContain(HEADER.brand);
    for (const link of HEADER.links) {
      expect(element.textContent).toContain(link.label);
    }
    expect(element.querySelectorAll('a[target="_blank"]').length).toBe(HEADER.socials.length);
  });
});
