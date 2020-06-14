export class Musics{

    constructor(
        public id?:number,
        public musicUrl?:string,
        public img_url?:string,
        public duration?:number,
        public genre?:string[],
        public instruments?:string[],
    ){}
}