import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})

export class HttpService {
  inpurselect: Number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  listofcart: any[] = []
  amountpayment: any
  user: any

  constructor(private http: HttpClient, private rotur: Router) {



  }
  getproduct(): Observable<[]> {
    return this.http.get<[]>('assets/json/data.json')
  }
  addtocart(caritem: any): void {
  const idproduct =caritem.id
    const check = this.listofcart.filter(x=>x.id===idproduct)
    console.log(typeof(idproduct))
    if (check.length==0) {
      this.listofcart.push(caritem)
      console.log(this.listofcart)
      alert("Product added Successfully !!!!!")
      this.rotur.navigate(['/'])
    }
    else {
      alert("This Product Already Added Successfully IF you Want Increase The Quantity Go to The cart Page???????")
    }
  }
  setamount(am: any, user: any): void {
    this.amountpayment = am
    this.user = user
  }

  removefromcart(caritem: any):void{
    const removeitem= this.listofcart.filter(x => x.id !=caritem.id)
    console.log(removeitem.filter(x => x.id !=caritem.id))
     console.log(caritem)
    this.listofcart=removeitem
    alert("This Product Was Removed")

  }


}
