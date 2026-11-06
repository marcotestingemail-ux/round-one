import { Component } from '@angular/core';
import { TITLE_BANNER } from '../../data/title-banner';

@Component({
  selector: 'app-title-banner',
  templateUrl: './title-banner.html',
})
export class TitleBanner {
  protected readonly banner = TITLE_BANNER;
}
