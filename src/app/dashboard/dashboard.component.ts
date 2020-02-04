import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { Router } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';
import { FormControl } from '@angular/forms';
import { GetEmployeesService } from '../services/get-employees.service';
import { SidenavService } from '../services/sidenav.service';
import { SidenavComponent } from '../sidenav/sidenav.component';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({transform: 'translateY(-100%)'}),
        animate('500ms ease-in', style({transform: 'translateY(0%)'}))
      ]),
      transition(':leave', [
        animate('500ms ease-in', style({transform: 'translateY(-100%)'}))
      ])
    ])
  ]
})
export class DashboardComponent implements OnInit {
  // @ViewChild('panel', { static: true }) public panel: ElementRef<any>;
  toggleActive:boolean = false;

  title = 'mongoAngular';
  visible: boolean;
  name = new FormControl;
  address = new FormControl;
  EmployeeData: any;
  isList: boolean;
  isUpdateList: boolean;
  newaddress: any;
  email =  new FormControl;
  number = new FormControl;
  ParentMessage: any;
  data1: any = []
  selectedFoodItem: any;
  myItems: any;



  constructor(private router:Router,private service : GetEmployeesService,
    private dialog: MatDialog,  private sidenav: SidenavService) { }

  ngOnInit() {
    this.selectedFoodItem = 'All'
    this.service.getfoods().subscribe((data:any) =>{
      this.data1 = data;
      this.myItems = data;
    })
    // this.service.addFood(this.data1).subscribe((data:any) =>{
    //   if(data)
    //   console.log('inserted');
    // })
  }


	toggleRightSidenav(item) {
		this.toggleActive = !this.toggleActive;
		this.sidenav.open(item);

    console.log('Clicked');
  }

  selectFoodItem(food){
    this.selectedFoodItem = food;
    this.myItems = food !== 'All' ? this.data1.filter(data => {
      return (data.type == food)
    }) : this.data1;

    console.log(this.myItems);
    
    
  }
  
  openDialog(data){
    const dialogRef = this.dialog.open(SidenavComponent, {
      width:"50%",
      data,
    });
    
  }
	
  openForm(){
    this.visible = true;
  }

  scrollPosition(){
    document.getElementById("panel").scrollIntoView({ behavior: 'smooth'});
  }

  child(ParentMssg){
    this.ParentMessage = ParentMssg
  }

  submit() {
    var uinput = {
      name: this.name.value,
      address: this.address.value,
      email: this.email.value,
      number: this.number.value
    }
    var e = uinput.email.indexOf('@');
    console.log(e);
    if(e == -1){
      alert('Please Insert Valid Email Address...');
      return false
    }
    
    if (uinput.name && uinput.address && uinput.email && uinput.number) {
      this.service.putUser(uinput).subscribe((data: any) => {

        if (data.code == 1) {
          alert('data inserted successfully..');
          this.visible = false
          this.name.reset()
          this.address.reset()
          this.email.reset()
          this.number.reset()
        } else if (data.code == 2) {
          alert('Employee already Exists.....!!');
          this.visible = false
          this.name.reset()
          this.address.reset()
        }

      })
    }

  }

  delete(item){
    this.service.deleteEmployee(item).subscribe( (data:any) =>{

      if(data.code == 1){
        alert('data deleted successfully..');
        const index = this.EmployeeData.findIndex(val => val.name === item.name);
        this.EmployeeData.splice(index,1);
        this.isList = false


      }

    })
  }

  onUpdateEmployee(){
    this.isUpdateList = true;
    // this.service.getEmployees().subscribe( (data:any) =>{
    //   this.EmployeeData = data;
    // })
  }

  updateEmployee(item){
    item.address = item.newaddress ? item.newaddress : item.address
    this.service.updateEmployee(item).subscribe( (data:any) =>{

      if(data.code == 1){
        alert('data Updated successfully..');
        this.isUpdateList = false;
        // const index = this.EmployeeData.findIndex(val => val.name === item.name);
        // this.EmployeeData.splice(index,1);
      }

    })
  }

  onDelete(){
    this.isList = true
    // this.service.getEmployees().subscribe( (data:any) =>{
    //   this.EmployeeData = data;
    // })
  }

  keyPress(event: any) {
    const pattern = /[0-9\+\-\ ]/;

    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }


  goto(){
    this.router.navigate(['/employeelist']);

  }

}
