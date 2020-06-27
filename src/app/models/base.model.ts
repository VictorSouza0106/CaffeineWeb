export abstract class BaseModel {

  id:number;

  protected static fromJson(jsonData:any) : BaseModel {
    return null;
  };

  public toJson():any{
    return JSON.parse(JSON.stringify(this));
  }
}
