import { Component, OnInit,Input,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() Product:any
  @Output() addtocart =new EventEmitter
  selectinput:Number[]=[1,2,3,4,5,6,7,8,9,10]
  constructor() {
    this.Product={
      id:Number,
      name:String,
      price:Number,
      url:String,
      Quentity:1,
    }
   }

  ngOnInit(): void {
  }
change(v:Number):void{
  alert(v)
}
trychange(){
  alert("dddddd")
}

}
