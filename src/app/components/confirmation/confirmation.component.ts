import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {
theAmount:any
User:any
  constructor(private http: HttpService,private rotur: Router) {
    this.theAmount=this.http.amountpayment
    this.User=this.http.user
    if (this.theAmount== null && this.theAmount == null) {
      this.rotur.navigate(['/'])
    }
  }

  ngOnInit(): void {
  }

}
