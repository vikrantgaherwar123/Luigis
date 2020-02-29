import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import * as $ from 'jquery';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {
  active: boolean = false;

  constructor() {
    // $(document).ready(function(){  
    //   $("#mydiv").hover(function(){  
    //       $("#mydiv").addClass("getClass")
    //   });
      
    //   $("#myAboutdiv1").hover(function () {
    //     $("#mydiv1").removeClass("getClass")
    //   });

    //   $("#mydiv1").hover(function () {
    //     $("#mydiv1").addClass("getClass")
    //   });

    //   $("#myServicediv1").hover(function () {
    //     $("#mydiv").removeClass("getClass")
    //   });
    // }) 
  }

  ngOnInit() {
  }

  ngDoCheck() {
    
  };

}
