import { TestBed } from '@angular/core/testing';
import { Home } from './home';

describe('Home', () => {
  it('renders the round-one text and the round-two effect', async () => {
    const fixture = TestBed.createComponent(Home);
    await fixture.whenStable();
    const text = (fixture.nativeElement as HTMLElement).textContent ?? '';
    expect(text).toContain('round-one');
    expect(text).toContain('Testing new slop');
    expect(text).toContain('Round-Two');
  });
});
