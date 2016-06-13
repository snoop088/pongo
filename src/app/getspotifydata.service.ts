import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {SearchParams} from './searchParams';

@Injectable()
export class GetspotifydataService {
  
  constructor(private _http: Http) {}
  
  public getData(searchParams: SearchParams): Observable<any[]> {
    let url: string = "https://api.spotify.com/v1/search?type=" + 
      searchParams.searchType + 
      "&limit=25&q=" + searchParams.searchType + ":" + 
      searchParams.searchText;
    
    return this._http.get(url).
      map(response => response.json());
  }

}
