import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { GetEmployeesService } from './get-employees.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private myRoute: Router, private service: GetEmployeesService) { }
  // sendToken(token: any) {
  //   this.service.loginUserType = token;
  // }
  getToken() {
    return this.service.loginUserType
  }
  isLoggedIn() {
    var getDetail = this.getToken();
    return getDetail ? (getDetail.code == 1) : false;
  }
  logout() {
    this.myRoute.navigate(["Login"]);
  }
}
