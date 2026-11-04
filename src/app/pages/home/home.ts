import { Component } from '@angular/core';
import { SITE } from '../../data/site';

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
})
export class Home {
  protected readonly site = SITE;
}
