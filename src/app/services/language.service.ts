import { Injectable } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  private languages = ['en', 'fr', 'es', 'de', 'it', 'pt', 'ru', 'ja', 'ko', 'zh', 'hi', 'ar', 'tr', 'id', 'pl', 'nl', 'sv', 'da', 'fi', 'nb', 'hu', 'cs', 'el', 'he', 'th', 'vi', 'bg', 'ro', 'fa', 'sk', 'uk', 'hr', 'ca', 'lt', 'sl', 'sr', 'bn', 'ms', 'et', 'is', 'lv', 'sw', 'tl', 'ur', 'ta', 'ml', 'kn', 'mr', 'te', 'af', 'zu', 'xh', 'sq', 'am', 'hy', 'az', 'eu', 'be', 'bs', 'cy', 'fy', 'gl', 'ka', 'gu', 'ha', 'haw', 'iw', 'jw', 'kk', 'km', 'ku', 'ky', 'lo', 'lb', 'mk', 'mg', 'mi', 'mn', 'ne', 'ny', 'ps', 'pa', 'so', 'su', 'tg', 'tk', 'uz', 'yo', 'zu'];

  constructor(private translateService: TranslateService) {
    this.translateService.setDefaultLang(this.languages[0]);
  }

  getCurrentLanguage(): string {
    return this.translateService.currentLang;
  }

  changeLanguage(language: string): void {
    if (this.languages.includes(language)) {
      this.translateService.use(language);
    }
  }

}
