import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {
theAmount:any
User:any
  constructor(private http: HttpService) {
    this.theAmount=this.http.amountpayment
    this.User=this.http.user
  }

  ngOnInit(): void {
  }

}
