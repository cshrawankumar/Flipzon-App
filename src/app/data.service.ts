import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders, HttpParams } from "@angular/common/http";
import { IPost } from './post'

import {Observable} from "rxjs/Observable";
//import { map } from 'rxjs/operators';
//import 'rxjs/Rx';

@Injectable()
export class DataService {
  //url:string="https://affiliate-api.flipkart.net/affiliate/search/json?query=sony+mobiles&resultCount=5";
  url:string="https://affiliate-api.flipkart.net/affiliate/search/json?";
  constructor(private _htc:HttpClient) { }

  createAuthorizationHeader(headers: HttpHeaders) {
    headers.append('Fk-Affiliate-Id', 'csaikiran'); 
    headers.append('Fk-Affiliate-Token', '6e6b395d763d49448f626e03ac59080e'); 
  }

 
 
  searchFlipkart(search:string):Observable<Object[]>{
    //let headers = new HttpHeaders();
    //this.createAuthorizationHeader(headers);
    /*const headers = new HttpHeaders().set('Fk-Affiliate-Id', 'csaikiran');
    headers.append('Fk-Affiliate-Token','6e6b395d763d49448f626e03ac59080e');*/
  //   let httpHeaders = new HttpHeaders()
  //                        .set('Content-Type', 'application/json');
   let httpParams = new HttpParams()
                        .set('query', search)
	                .set('resultCount', "5");
    console.log(httpParams);
    return this._htc.get<Object[]>(this.url,
    {
      params: httpParams, 
      responseType: 'json'
});
  }

}
