import { Component, OnInit ,Input} from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';


@Component({
  selector: 'app-add-cart',
  templateUrl: './add-cart.component.html',
  styleUrls: ['./add-cart.component.css']
})
export class AddCartComponent implements OnInit {
 @Input() productcart:any
 selectinput:any
  Quentity: Number=1
  constructor( private http: HttpService,private rotur: Router) {
 this.productcart=[{
      id:Number,
      name:String,
      price:Number,
      url:String,
    //  Quentity:1,
    }]


   }

  ngOnInit(): void {
    this.selectinput = this.http.inpurselect
  }
  addtocart(Product: any): void {
    this.productcart.id= Product.id
    this.productcart.name= Product.name
    this.productcart.price= Product.price
    this.productcart.url= Product.url
    this.productcart.Quentity= this.Quentity
    this.rotur.navigate(['/'])
this.http.addtocart(this.productcart)
  }
}
