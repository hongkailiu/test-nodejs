import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  english = 'English';
  chinese = '中文 Chinese'

  ukIcon = "assets/i/uk-icon.png";
  zhIcon = "assets/i/china-icon.png";

  imgLangSrc: string
  divLangText: string

  constructor(private translate: TranslateService, private activatedRoute: ActivatedRoute) {
    this.selectLang('en')
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

  ngOnInit() {
    console.log("ngOnInit")
    this.activatedRoute.queryParams
      .subscribe(params => {
        const lang = params['lang']
        if (lang != null) {
          this.selectLang(lang)
        }
      }
      );
  }
}
