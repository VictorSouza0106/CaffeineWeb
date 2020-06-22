import { Injectable } from '@angular/core';
import { langFilePt } from '../translates/pt-BR'
import { langFileEn } from '../translates/en-US'
import { HttpClient } from '@angular/common/http';

@Injectable()
export class TranslateService {

  data: any = {};

  constructor() {}

  use(lang: string): Promise<{}> {
    return new Promise<{}>((resolve, reject) => {
      let langData;
      if(lang === 'en-US')
        langData = langFileEn;
      else
        langData = langFilePt;

      this.data = langData;
      resolve(langData);
    });
  }

}
