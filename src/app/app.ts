import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './layout/header/header';
import { TitleBanner } from './layout/title-banner/title-banner';

@Component({
  imports: [RouterOutlet, Header, TitleBanner],
  selector: 'app-root',
  templateUrl: './app.html',
})
export class App {}
