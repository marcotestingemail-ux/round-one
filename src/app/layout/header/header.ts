import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HEADER } from '../../data/header';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.html',
})
export class Header {
  protected readonly header = HEADER;
}
