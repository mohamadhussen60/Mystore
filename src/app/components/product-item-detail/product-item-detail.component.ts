import { Component, OnInit, Input,Output,EventEmitter} from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css']
})
export class ProductItemDetailComponent implements OnInit {
  @Output() addtocart=new EventEmitter
  id: Number = 0;
  listofproduct: any[] = [];
  ProductDetail: any=[{
      id: Number,
      name: String,
      price: Number,
      url: String,
      description: String,
      Quentity:Number
  }];
  constructor(private route: ActivatedRoute, private http: HttpService) {

  }

  ngOnInit(): void {

    this.route.queryParams.subscribe(params => {
      this.id = params['id'];

      this.http.getproduct().subscribe(res => {
        this.listofproduct = res


        this.ProductDetail.id = this.listofproduct.filter(x => x.id == this.id).map(x=> x.id)
        this.ProductDetail.name= this.listofproduct.filter(x => x.id == this.id).map(x=> x.name)
        this.ProductDetail.price = this.listofproduct.filter(x => x.id == this.id).map(x=> x.price)
        this.ProductDetail.url = this.listofproduct.filter(x => x.id == this.id).map(x=> x.url)
        this.ProductDetail.description = this.listofproduct.filter(x => x.id == this.id).map(x=> x.description)
        console.log(this.ProductDetail)

      })
    });
  }
}


