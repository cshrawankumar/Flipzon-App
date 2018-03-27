import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders, HttpParams } from "@angular/common/http";
import { IPost } from './post'

import {Observable} from "rxjs/Observable";
//import { map } from 'rxjs/operators';
//import 'rxjs/Rx';

@Injectable()
export class DataService {
  amazonUrl:string="http://localhost:3000/search/amazon?";
  flipkartUrl: string = "http://localhost:3000/search?";
  constructor(private _htc:HttpClient) { }
 
  searchFlipkart(search:string):Observable<Object[]>{
   let httpParams = new HttpParams()
                        .set('query', search)
	                .set('count', "5");
    console.log(httpParams);
    return this._htc.get<Object[]>(this.flipkartUrl,
    {
      params: httpParams, 
      responseType: 'json',
    });
  }

  searchAmazon(search:string):Observable<Object[]>{
    let httpParams = new HttpParams()
                         .set('query', search)
                   .set('count', "5");
     console.log(httpParams);
     return this._htc.get<Object[]>(this.amazonUrl,
     {
       params: httpParams, 
       responseType: 'json',
     });
   }

}
