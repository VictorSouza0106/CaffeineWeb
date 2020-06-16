export class Musics{

    constructor(
        public id?:number,
        public name?:string,
        public music_url?:string,
        public img_url?:string,
        public duration?:number,
        public genre?:string[],
        public instruments?:string[],
    ){}
}