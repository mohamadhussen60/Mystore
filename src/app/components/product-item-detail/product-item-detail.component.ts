import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router'
import { HttpService } from 'src/app/services/http.service';



@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css']
})
export class ProductItemDetailComponent implements OnInit {
  //@Output() addtocart=new EventEmitter
  selectinput: any
  Quentity: Number = 1
  id: Number = 0;
  listofproduct: any[] = [];
  ProductDetail: any
  constructor(private route: ActivatedRoute, private http: HttpService, private Route: Router,) {
    this.ProductDetail = [{
      id: Number,
      name: String,
      price: Number,
      url: String,
      description: String,
      Quentity: this.Quentity

    }];
  }

  ngOnInit(): void {
    this.selectinput = this.http.inpurselect
    this.route.queryParams.subscribe(params => {
      this.id = params['id'];

      this.http.getproduct().subscribe(res => {
        this.listofproduct = res


        this.ProductDetail.id = this.listofproduct.filter(x => x.id == this.id).map(x => x.id)
        this.ProductDetail.name = this.listofproduct.filter(x => x.id == this.id).map(x => x.name)
        this.ProductDetail.price = this.listofproduct.filter(x => x.id == this.id).map(x => x.price)
        this.ProductDetail.url = this.listofproduct.filter(x => x.id == this.id).map(x => x.url)
        this.ProductDetail.description = this.listofproduct.filter(x => x.id == this.id).map(x => x.description)
        this.ProductDetail.Quentity = this.Quentity
        console.log(this.ProductDetail)

      })
    });
  }
  // addtocart(Product: any): void {
  //   // this.ProductDetail.id = this.listofproduct.filter(x => x.id == this.id).map(x => x.id)
  //   // this.ProductDetail.name = this.listofproduct.filter(x => x.id == this.id).map(x => x.name)
  //   // this.ProductDetail.price = this.listofproduct.filter(x => x.id == this.id).map(x => x.price)
  //   // this.ProductDetail.url = this.listofproduct.filter(x => x.id == this.id).map(x => x.url)
  //   // this.ProductDetail.description = this.listofproduct.filter(x => x.id == this.id).map(x => x.description)
  //   // this.ProductDetail.Quentity = this.Quentity
  //   // console.log(this.ProductDetail)
  //   this.http.addtocart(Product)
  //   this.Route.navigate(['/'])
  // }
}
