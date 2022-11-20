
import { Component, OnInit ,Input} from '@angular/core';

import { HttpService } from 'src/app/services/http.service';




@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
 listofcart:any

  constructor(private http: HttpService) {

  }

  ngOnInit(): void {
    this.listofcart= this.http.listofcart
    console.log(this.listofcart)
  }
  addtocart(Pr:any[]): void {
this.http.addtocart(Pr)
alert('This Product Was Added')
console.log(this.listofcart)
  }

}
