import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
@Input() listofcart:any
  constructor() {
    this.listofcart=[{
      id: Number,
      name: String,
      price: Number,
      url: String,
      description: String,
      Quentity:1
    }]
  }

  ngOnInit(): void {
  }
  addtocart(Pr:any[]): void {
this.listofcart=this.listofcart.Push(Pr)
alert('This Product Was Added')
console.log(this.listofcart)
  }

}
