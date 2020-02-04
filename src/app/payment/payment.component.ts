import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { Base64 } from 'js-base64';
import { GetEmployeesService } from '../services/get-employees.service';
 
declare let paypal: any;

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit,  AfterViewChecked {


  addScript: boolean = false;
  paypalLoad: boolean = true;
  
  finalAmount: number = 1;

  constructor(){ }

  ngOnInit(){
    
  }
 
  paypalConfig = {
    env: 'sandbox',
    client: {
      sandbox: 'AcldcgJ5eIObpTdBF2UkfAW2p3oZvMlpsz02n0dLNaHU02_CIUBKt4nnSMUTltjm5ZkyH8SKBhOO-Jgv',
      // production: '<your-production-key here>'
    },
    commit: true,
    payment: (data, actions) => {
      return actions.payment.create({
        payment: {
          transactions: [
            { amount: { total: this.finalAmount, currency: 'INR' } }
          ]
        }
      });
    },
    onAuthorize: (data, actions) => {
      return actions.payment.execute().then((payment) => {
        //Do something when payment is successful.
      })
    }
  };
 
  ngAfterViewChecked(): void {
    if (!this.addScript) {
      this.addPaypalScript().then(() => {
        paypal.Button.render(this.paypalConfig, '#paypal-checkout-btn');
        this.paypalLoad = false;
      })
    }
  }
  
  addPaypalScript() {
    this.addScript = true;
    return new Promise((resolve, reject) => {
      let scripttagElement = document.createElement('script');    
      scripttagElement.src = 'https://www.paypalobjects.com/api/checkout.js';
      scripttagElement.onload = resolve;
      document.body.appendChild(scripttagElement);
    })
  }
 
}
