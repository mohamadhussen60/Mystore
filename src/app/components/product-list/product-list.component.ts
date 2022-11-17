import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

import { Router } from '@angular/router';
import { eventListeners } from '@popperjs/core';



@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  @Output() addtocart = new EventEmitter
  listofproduct: any[] = [];
  quantity:Number=1;


  constructor(private httpService: HttpService, private router:Router) { }

  ngOnInit(): void {
    this.httpService.getproduct().subscribe(res => {
      this.listofproduct = res

    });


  }

  // addtocart (p:any,selectinput:Number):void{

  //   alert("This Product Was Added: -"+`${selectinput}`+"Of"+`${p.name}`)
  // }

}

