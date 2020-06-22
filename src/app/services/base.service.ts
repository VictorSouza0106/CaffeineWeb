import {HttpClient, HttpErrorResponse, HttpHeaders, HttpParams, HttpResponse} from '@angular/common/http';
import {Injector} from '@angular/core';
import {LocalStorageService, SessionStorageService} from 'ngx-webstorage';
import {TranslateService} from './translate.service';
import {environment} from '../../environments/environment';

const HTTP_FORBIDDEN = 403;
const HTTP_UNATH = 401;

export class BaseService<T> {

  http: HttpClient;
  apiPath: string;
  translate: TranslateService;
  sessionStorageService: SessionStorageService;
  sessionStorage: SessionStorageService;

  constructor(protected injector : Injector, protected specificUrl: string, protected jsonDataToResourceFn: (jsonData:any) => T) {
    this.apiPath = environment.api + specificUrl;
    this.http = injector.get(HttpClient);
    this.translate = injector.get(TranslateService);
    this.sessionStorageService = injector.get(SessionStorageService);
    this.sessionStorage = injector.get(SessionStorageService);
  }

  async buildHeader() : Promise<HttpHeaders> {

    let firebase = this.sessionStorageService.retrieve('token');
    let refresh = this.sessionStorage.retrieve('rt');
    let id_company = null;

    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'firebase': firebase,
      'refresh': refresh
    });

    return headers;
  }

  logoutUser() {
    this.sessionStorage.clear();
  }

  static buildQueryParams(params: any): HttpParams {
    return Object.getOwnPropertyNames(params).reduce((p, key) => p.set(key, params[key]), new HttpParams());
  }

  refreshToken(responseHeaders:HttpHeaders) {
    try{

      let token = responseHeaders.get("Core-Token");
      let refresh = responseHeaders.get("Core-Refresh");

      this.sessionStorage.store('token',token);
      this.sessionStorage.store('rt',refresh);

      console.log("Token refreshed")
    }catch(Exception){
      console.log("Token not refreshed")
    }
  }

  willLogoutUser(error : HttpErrorResponse){

    try{
      if(error.status === HTTP_FORBIDDEN){
        this.logoutUser();
        window.alert(this.translate.data['app']['session_expired']);
      }
    }catch (e) {}
  }

  async getResources(queryParams?: any) : Promise<T[]> {

    let headers = await this.buildHeader();

    if(queryParams){
      queryParams = BaseService.buildQueryParams(queryParams);
    }else{
      queryParams = {};
    }

    console.log(headers);

    return this.http.get(this.apiPath,{headers:headers,params:queryParams, observe: 'response'}).toPromise().then(
      (response: HttpResponse<{data:any[]}>) => {
        console.log(response);
        let data = response.body.data;

        this.refreshToken(response.headers);
        return this.jsonDataToModels(data);
      }
    ).catch( reason => {
      this.willLogoutUser(reason);
      throw reason;
    });
  }

  async getResource(id:any): Promise<T> {

    let headers = await this.buildHeader();
    console.log(headers);

    return this.http.get(this.apiPath+'/'+id,{headers:headers, observe: 'response'}).toPromise().then(
      (response: HttpResponse<{data:any}>) => {
        console.log(response);
        let data = response.body.data;

        this.refreshToken(response.headers);
        return this.jsonDataToModel(data);
      }
    ).catch( reason => {
      this.willLogoutUser(reason);
      throw reason;
    });
  }

  async custom(body: any) : Promise<any[]> {

    let header = await this.buildHeader();
    console.log("Custom Request",body);
    return this.http.post(this.apiPath,body,{headers:header, observe: 'response'}).toPromise().then(
      (response: HttpResponse<any>) => {
        console.log(response);
        let data = response.body.data;

        this.refreshToken(response.headers);
        return this.jsonDataToModels(data);
      }
    ).catch( reason => {
      this.willLogoutUser(reason);
      throw reason;
    });

  }

  async create(resource: T): Promise<T> {
    console.log("Creating",resource);

    let headers = await this.buildHeader();

    return this.http.post(this.apiPath,resource,{headers:headers, observe: 'response'}).toPromise().then(
      (response: HttpResponse<{data:any}>) => {
        console.log("Response",response);
        let data = response.body.data;

        this.refreshToken(response.headers);
        return this.jsonDataToModel(data);
      }
    ).catch( reason => {
      this.willLogoutUser(reason);
      throw reason;
    });
  }

  async update(resource: T, id : number): Promise<T> {
    let header = await this.buildHeader();
    return this.http.put(this.apiPath+'/'+id,resource,{headers:header, observe: 'response'}).toPromise().then(
      (res: HttpResponse<{data:T}>)=>{
        let data = res.body.data;

        this.refreshToken(res.headers);
        return this.jsonDataToModel(data);
      }
    ).catch( reason => {
      this.willLogoutUser(reason);
      throw reason;
    });
  }

  async delete(id:any): Promise<boolean> {
    let header = await this.buildHeader();
    return this.http.delete(this.apiPath+"/"+id,{headers:header, observe: 'response'}).toPromise().then(
      ( (res: HttpResponse<{data:boolean}>) => {

        this.refreshToken(res.headers);
        return true;
      })
    ).catch( reason => {
      this.willLogoutUser(reason);
      throw reason;
    });
  }


  protected jsonDataToModel(jsonData:any) : T {
    return this.jsonDataToResourceFn(jsonData);
  }

  protected jsonDataToModels(jsonData:any[]): T[] {
    let resources : T[] = [];

    jsonData.forEach((data:any) => {
      resources.push(this.jsonDataToResourceFn(data));
    });

    return resources;
  }

}
