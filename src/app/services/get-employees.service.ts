import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetEmployeesService {

  PAYPAL_OAUTH_API = 'https://api.sandbox.paypal.com/v1/oauth2/token/';
  PAYPAL_ORDER_API = 'https://api.sandbox.paypal.com/v2/checkout/orders/';

  employeeURL = 'http://192.168.1.95:3000/Employeeid';
  putUserURL = 'http://192.168.1.95:3000/newUser';
  deleteEmployeeURL = 'http://192.168.1.95:3000/deleteEmployee';
  updateEmployeeURL = 'http://192.168.1.95:3000/updateEmployee';
  getSingleEmployeeURL = 'http://192.168.1.95:3000/viewSingleEmployee';
  loginURL = 'http://192.168.1.95:3000/login';
  sendMailURL = 'http://192.168.1.95:3000/sendmail';



  foodProductURL = 'http://192.168.1.95:3000/getproduct';
  addFoodURL = 'http://192.168.1.95:3000/addFood';







  constructor(private http: HttpClient) { }

  private _loginUserObj: any;
  get loginUserType():any{
      return this._loginUserObj;
  }
  set loginUserType(value){
      this._loginUserObj = value;
  }


  getfoods(){
    return this.http.get(this.foodProductURL);
  }

  putUser(data){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    }
    return this.http.post(this.putUserURL,data,httpOptions);
  }

  addFood(data){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    }
    return this.http.post(this.addFoodURL,data,httpOptions);
  }


  sendMail(email){
    var data = {
      email: email
    }
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    }
    return this.http.post(this.sendMailURL,data,httpOptions);
  }

  login(data){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    }
    return this.http.post(this.loginURL,data,httpOptions);
  }

  deleteEmployee(data){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    }
    return this.http.post(this.deleteEmployeeURL,data,httpOptions);
  }

  updateEmployee(data){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    }
    return this.http.post(this.updateEmployeeURL,data,httpOptions);
  }

  getSingleEmployee(data){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    }
    return this.http.post(this.getSingleEmployeeURL,data,httpOptions);
  }

  getPaymentOAUTH(data){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    }
    return this.http.post(this.getSingleEmployeeURL,data,httpOptions);
  }



}
