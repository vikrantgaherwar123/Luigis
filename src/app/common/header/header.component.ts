import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title = "Vikrant"
  sidebarOpen: boolean;
  constructor() { }

  ngOnInit() {
  }

  w3_open() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    this.sidebarOpen = true;
  }
  w3_close() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
    this.sidebarOpen = false;
  }

}
