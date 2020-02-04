import { Component, OnInit } from '@angular/core';
import { GetEmployeesService } from 'src/app/services/get-employees.service';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { EmployeeDetailComponent } from 'src/app/employee-detail/employee-detail.component';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  EmployeeData: any;
  myControl = new FormControl();
  filteredOptions: Observable<string[]>;
  singleEmployee: any;

  constructor(private service : GetEmployeesService,private dialog: MatDialog) { }

  ngOnInit() {
    // this.service.getEmployees().subscribe( (data:any) =>{
    //   this.EmployeeData = data;

    //   this.filteredOptions = this.myControl.valueChanges
    //   .pipe(
    //     startWith(''),
    //     map(value => value ? this._filter(value) : this.EmployeeData )
    //   );
    // })
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.EmployeeData.filter(employee => employee.name.toLowerCase().includes(filterValue));
  }

  getEmployee(item){
    this.service.getSingleEmployee(item).subscribe( (data:any) =>{
      this.singleEmployee = data;
      
    })
  }

  openDialog(item){
    const dialogRef = this.dialog.open(EmployeeDetailComponent, {
      data: {data: item}
    });
    
  }

}
