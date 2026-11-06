import { Component, ElementRef, afterNextRender, inject } from '@angular/core';
import { ROUND_TWO } from '../../data/round-two';

@Component({
  selector: 'app-round-two',
  templateUrl: './round-two.html',
  host: {
    class: 'block',
    '(window:scroll)': 'update()',
    '(window:resize)': 'update()',
  },
})
export class RoundTwo {
  protected readonly content = ROUND_TWO;
  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef);

  constructor() {
    afterNextRender(() => this.update());
  }

  /**
   * Works out how far you have scrolled through this section (0 = just arrived, 1 = done)
   * and hands that number to the CSS in styles.css as --progress.
   */
  protected update(): void {
    const element = this.host.nativeElement;
    const reduceMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false;
    if (reduceMotion) {
      element.style.setProperty('--progress', '1');
      return;
    }

    const rect = element.getBoundingClientRect();
    const distance = rect.height - window.innerHeight;
    const progress = distance > 0 ? Math.min(1, Math.max(0, -rect.top / distance)) : 0;
    element.style.setProperty('--progress', progress.toFixed(4));
  }
}
