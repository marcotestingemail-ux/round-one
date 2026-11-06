import { Component } from '@angular/core';
import { SITE } from '../../data/site';
import { RoundTwo } from '../../shared/round-two/round-two';

@Component({
  selector: 'app-home',
  imports: [RoundTwo],
  templateUrl: './home.html',
})
export class Home {
  protected readonly site = SITE;
}
