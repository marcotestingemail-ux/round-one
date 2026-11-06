import { TestBed } from '@angular/core/testing';
import { RoundTwo } from './round-two';
import { ROUND_TWO } from '../../data/round-two';

describe('RoundTwo', () => {
  it('renders the title and the small text', async () => {
    const fixture = TestBed.createComponent(RoundTwo);
    await fixture.whenStable();
    const element = fixture.nativeElement as HTMLElement;

    expect(element.querySelector('[data-feature="round-two"]')).toBeTruthy();
    expect(element.querySelector('h2')?.textContent).toContain(ROUND_TWO.title);
    expect(element.textContent).toContain(ROUND_TWO.subtitle);
  });
});
