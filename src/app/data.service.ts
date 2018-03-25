import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders, HttpParams } from "@angular/common/http";
import { IPost } from './post'

import {Observable} from "rxjs/Observable";
//import { map } from 'rxjs/operators';
//import 'rxjs/Rx';

@Injectable()
export class DataService {
  url:string="http://localhost:3000/search?";
  //url:string="https://affiliate-api.flipkart.net/affiliate/search/json?";
  //url:string="https://jsonplaceholder.typicode.com/posts";
  constructor(private _htc:HttpClient) { }
 
  searchFlipkart(search:string):Observable<Object[]>{
   let httpParams = new HttpParams()
                        .set('query', search)
	                .set('count', "5");
    console.log(httpParams);
    return this._htc.get<Object[]>(this.url,
    {
      params: httpParams, 
      responseType: 'json',
    });
  }

}
