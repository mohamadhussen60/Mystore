
import { Component, OnInit, Input } from '@angular/core';

import { HttpService } from 'src/app/services/http.service';
import { Router } from '@angular/router';





@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  listofcart: any[] = []
  totalprice: any
  fullname:String=''
  Address:String=''
  creditcartnumber:String=''
  selectinput: Number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  constructor(private http: HttpService,private rotur: Router) {

  }

  ngOnInit(): void {
    this.listofcart = this.http.listofcart
    let a = this.listofcart.map(x => x.price)
    let bb = this.listofcart.map(x => x.Quentity)

    const sum = this.listofcart.reduce((accumulator, object) => {
      return accumulator + object.Subtotal;
    }, 0);

    this.totalprice = sum.toFixed(2)
    console.log(this.listofcart)
  }
  calutettotal(){
    this.listofcart.forEach(e => e.Subtotal= parseFloat(e.price)*parseFloat(e.Quentity));
    const sum = this.listofcart.reduce((accumulator, object) => {
      return accumulator + object.Subtotal;
    }, 0);

    this.totalprice = sum.toFixed(2)
  }
  addtocart(Pr: any[]): void {
    this.http.addtocart(Pr)
    alert('This Product Was Added')
    console.log(this.listofcart)
  }
  confirm(am :any ):void{
this.http.setamount(am,this.fullname)
  //  this.rotur.navigate(['/Confirmation'])
  }

}
