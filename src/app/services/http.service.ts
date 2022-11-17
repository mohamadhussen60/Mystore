import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpService {


  constructor(private http: HttpClient) { }

  getproduct(): Observable<[]> {


  return  this.http.get<[]>('assets/json/data.json')
  }


}
