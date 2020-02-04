import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { GetEmployeesService } from '../services/get-employees.service';
import { MessageBox } from '../services/message-box.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  @Output() childCalled = new EventEmitter();
  mssg : string = 'Message from child'
  message: any;


  constructor(private router: Router,private dialog: MatDialog, private service: GetEmployeesService) { }

  ngOnInit() {
  }

  goToParent(){
    this.childCalled.emit(this.mssg);
  }

  sendMail(){
    var email = (localStorage.getItem('email'));
    this.service.sendMail(email).subscribe((data:any) => {
      this.message = data.mssg;
      MessageBox.show(this.dialog, this.message, "");
    })
  }

  goToPayment() {
    this.router.navigate(['/payment']);
  }

}
