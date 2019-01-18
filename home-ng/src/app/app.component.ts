import { Component } from '@angular/core';
import { TranslateService } from './translate.service';
import { BUILD_ENVIRONMENT } from './build.environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //title = 'Hongkai Liu\u2019s Homepage';

  english = 'English';
  chinese = '中文 Chinese'

  ukIcon = "assets/i/uk-icon.png";
  zhIcon = "assets/i/china-icon.png";

  divLangText = this.english;
  imgLangSrc = this.ukIcon;
  buildLine = "Version " + BUILD_ENVIRONMENT.version + " built at " + BUILD_ENVIRONMENT.time;

  constructor(private translate: TranslateService) {
    //translate.use('en').then(() => {
    //  console.log(translate.data);
    //});
  }

  selectLang(lang: string) {
    switch (lang) {
      case 'en':
        this.imgLangSrc = this.ukIcon;
        this.divLangText = this.english;
        this.translate.use('en');
        break;
      case 'zh':
        this.imgLangSrc = this.zhIcon;
        this.divLangText = this.chinese;
        this.translate.use('zh');
        break;
      default:
        console.error('unsupported language is selected: ' + lang);
    }
  }

  onNavigate(urlString: string) {
    window.open(urlString, "_blank");
  }

}
