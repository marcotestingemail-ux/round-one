import { TestBed } from '@angular/core/testing';
import { RoundTwo } from './round-two';

describe('RoundTwo', () => {
  it('renders its title and subtitle', async () => {
    const fixture = TestBed.createComponent(RoundTwo);
    await fixture.whenStable();
    const text = (fixture.nativeElement as HTMLElement).textContent ?? '';
    expect(text).toContain('Round-Two');
    expect(text).toContain('Testing new slop 2');
  });
});
