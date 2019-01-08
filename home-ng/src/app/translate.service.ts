import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TranslateService {
  data: any = {};
  constructor(private http: HttpClient) { }

  selectedLang = 'en';

  getSelectedLang(): String {
    return this.selectedLang
  }

  use(lang: string): Promise<{}> {
    return new Promise<{}>((resolve, reject) => {
      this.selectedLang = `${lang || 'en'}`;
      const langPath = `assets/i18n/${lang || 'en'}.json`;
      this.http.get<{}>(langPath).subscribe(
        translation => {
          this.data = Object.assign({}, translation || {});
          resolve(this.data);
        },
        error => {
          this.data = {};
          resolve(this.data);
        }
      );
    });
  }
}
