import { TestBed } from '@angular/core/testing';
import { TITLE_BANNER } from '../../data/title-banner';
import { TitleBanner } from './title-banner';

describe('TitleBanner', () => {
  it('shows the title', async () => {
    const fixture = TestBed.createComponent(TitleBanner);
    await fixture.whenStable();

    const heading: HTMLElement | null = fixture.nativeElement.querySelector('h1');
    expect(heading?.textContent).toContain(TITLE_BANNER.title);
  });
});
