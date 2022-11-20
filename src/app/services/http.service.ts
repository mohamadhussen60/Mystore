import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class HttpService {
  inpurselect: Number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  listofcart: any[]=[]

  constructor(private http: HttpClient) {



}
  getproduct(): Observable<[]> {
    return this.http.get<[]>('assets/json/data.json')
  }
  addtocart(caritem: any): void {
    alert("Product added")
    this.listofcart.push(caritem)

    console.log(this.listofcart)  }



}
