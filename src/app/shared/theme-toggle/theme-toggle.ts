import { DOCUMENT } from '@angular/common';
import { Component, effect, inject, signal } from '@angular/core';
import { THEME_TOGGLE } from '../../data/theme-toggle';

@Component({
  selector: 'app-theme-toggle',
  templateUrl: './theme-toggle.html',
})
export class ThemeToggle {
  private readonly document = inject(DOCUMENT);
  protected readonly content = THEME_TOGGLE;
  protected readonly dark = signal(this.readSaved());

  constructor() {
    effect(() => {
      const theme = this.dark() ? this.content.darkTheme : this.content.lightTheme;
      this.document.documentElement.setAttribute('data-theme', theme);
      try {
        localStorage.setItem(this.content.storageKey, theme);
      } catch {
        // Saving is optional: the toggle still works if the browser blocks it.
      }
    });
  }

  protected toggle(): void {
    this.dark.update((value) => !value);
  }

  private readSaved(): boolean {
    try {
      return localStorage.getItem(this.content.storageKey) === this.content.darkTheme;
    } catch {
      return false;
    }
  }
}
