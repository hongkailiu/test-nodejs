import { Component } from '@angular/core';
import { TranslateService } from './translate.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hongkai Liu\u2019s Homepage';
  imgLangSrc = "assets/i/china-icon.png";

  constructor(private translate: TranslateService) {
    //translate.use('en').then(() => {
    //  console.log(translate.data);
    //});
  }

  selectLang() {
    switch(this.translate.selectedLang) {
      case 'en':
        this.imgLangSrc = "assets/i/uk-icon.png";
        this.translate.use('zh');
        break;
      case 'zh':
        this.imgLangSrc = "assets/i/china-icon.png";
        this.translate.use('en')
        break;
      default:
        console.error('unsupported langauge is selected: ' + this.translate.selectedLang);
    }
  }

  onNavigate(urlString: string) {
    window.open(urlString, "_blank");
  }

}
