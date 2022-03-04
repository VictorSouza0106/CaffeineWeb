import { BaseModel } from './base.model';

export class User extends BaseModel{

    constructor(
        public nickname?: string,
        public email?: string,
        public password?: string,
        public created_at?: number,
        public license?: number,
    ){
        super();
    }

    static fromJson(json: any): User {
        let user: User =  Object.assign(new User(), json);
        return user;
    }

    static toJson():any{
      return JSON.parse(JSON.stringify(this));
    }
}