import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import {TranslateService} from '@ngx-translate/core';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-tabset',
  templateUrl: './tabset.component.html',
  standalone: true,
  imports: [NgbNavModule,TranslateModule],
  styleUrls: ['./tabset.component.css']
})
export class NgbdNavBasic {
	active = 1;
  constructor(translate: TranslateService) {
    translate.setDefaultLang('en');
    translate.use('en');
  }
}

