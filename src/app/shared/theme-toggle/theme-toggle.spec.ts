import { TestBed } from '@angular/core/testing';
import { ThemeToggle } from './theme-toggle';

describe('ThemeToggle', () => {
  it('renders a button to switch the color mode', async () => {
    await TestBed.configureTestingModule({ imports: [ThemeToggle] }).compileComponents();
    const fixture = TestBed.createComponent(ThemeToggle);
    await fixture.whenStable();
    const element = fixture.nativeElement as HTMLElement;
    expect(element.querySelector('[data-feature="theme-toggle"]')).not.toBeNull();
    expect(element.querySelectorAll('button').length).toBeGreaterThan(0);
  });
});
