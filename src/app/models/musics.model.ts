import { BaseModel } from './base.model';

export class Musics extends BaseModel{

    constructor(
        public name?:string,
        public music_url?:string,
        public image?:string,
        public duration?:number,
        public genre?:string[],
        public instruments?:string[],
    ){
        super();
    }

    static fromJson(json: any): Musics {
        let musics: Musics =  Object.assign(new Musics(), json);
        return musics;
    }

    static toJson():any{
      return JSON.parse(JSON.stringify(this));
    }
}