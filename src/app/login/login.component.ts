import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { MessageBox } from "../services/message-box.service";
import { MatDialog } from '@angular/material/dialog';
import { GetEmployeesService } from '../services/get-employees.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginform: FormGroup
  signIn: FormGroup

  message: any;
  submitted: boolean = false;
  loginText: string = 'Login'
  loginFormText: boolean = false
  pwdPattern = "[A-Za-z0-9]+";


  //  username = new FormControl('', [Validators.required, Validators.maxLength(15)]);
  //  password = new FormControl(20, Validators.required);
  constructor(private auth: AuthService, private route: Router, private formBuilder: FormBuilder, private dialog: MatDialog,
    private service: GetEmployeesService) {
    this.signIn = this.formBuilder.group({
      password: ['', [Validators.required,Validators.minLength(6), Validators.pattern(this.pwdPattern)]],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      confirmPassword: ['', Validators.required]
    });

    this.loginform = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', [Validators.required,Validators.pattern(this.pwdPattern)]],
    });
  }

  ngOnInit() {
    var x = 78968
    var rev = 0;
    var rem = 0;
    while(x !== 0 ){
      rev *= 10;
      rem = x % 10;
      rev = rem + rev ;
      x = x / 10 ^ 0;
    }
    console.log(rev);

    
    for (let i = 100; i < 1000; i++) {
      var a = 0
      var sum = 0;
      var j
      j = i

      while (j !== 0) {
        a = j % 10;
        sum = sum + a * a * a;
        j = j / 10 ^ 0;
      }

      if (sum == i) {
        console.log(i);
        j = 0
      }
    }
   


  }


  loginForm(){
    this.submitted = false;
    this.loginFormText = !this.loginFormText;
    if(!this.loginFormText){
      this.loginText = 'Login'
    }else{
      this.loginText = 'Sign In'
    }
    this.loginform.reset();
    this.signIn.reset();

  }

  // convenience getter for easy access to form fields
  get f() { return this.signIn.controls; }
  get v() { return this.loginform.controls; }


  onSubmit() {
    this.submitted = true
    if(this.signIn.value.password !== this.signIn.value.confirmPassword){
      this.message = "Password And Confirm Password Must be same";
      MessageBox.show(this.dialog, this.message, "");
      return;
    }
    if(this.signIn.valid){
      var obj = {
        firstName: this.signIn.value.firstName,
        lastName: this.signIn.value.lastName,
        email: this.signIn.value.email,
        password: this.signIn.value.password,
        confirmPassword: this.signIn.value.confirmPassword
      }
      this.service.putUser(obj).subscribe((data: any) => {
        console.log(data);
        if(data.code == 1){
          localStorage.setItem('email',obj.email);
          this.submitted = !this.submitted
          this.loginFormText = !this.loginFormText;
          this.message = data.mssg;
          MessageBox.show(this.dialog, this.message, "");
        }
        else {
          this.message = data.mssg;
          MessageBox.show(this.dialog, this.message, "");
          this.submitted = !this.submitted
          return this.loginFormText = !this.loginFormText;;
        }
      })
    }
    
    // stop here if form is invalid
    return this.signIn.invalid;
  }

  login() {
    this.submitted = true;
    if (this.loginform.valid) {
      var obj = {
        firstName: this.loginform.value.username,
        password: this.loginform.value.password
      }
      // this.auth.sendToken(obj);
      // if (this.auth.isLoggedIn()) {
      //   this.route.navigate(["dashboard"]);
      // }
      this.service.login(obj).subscribe((data: any) => {
        if(data.code == 1){
          this.service.loginUserType = data
          if (this.auth.isLoggedIn()) {
            this.route.navigate(["dashboard"]);
          }
        }
        else {
          this.message = data.mssg;
          MessageBox.show(this.dialog, this.message, "");
          return false;
        }
      })
      
    } 
    // else {
    //   this.message = "Invalid Credentials";
    //   MessageBox.show(this.dialog, this.message, "");
    //   return false;
    // }
  }

}
