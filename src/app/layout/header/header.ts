import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HEADER } from '../../data/header';
import { ThemeToggle } from '../../shared/theme-toggle/theme-toggle';

@Component({
  selector: 'app-header',
  imports: [RouterLink, ThemeToggle],
  templateUrl: './header.html',
})
export class Header {
  protected readonly header = HEADER;
}
