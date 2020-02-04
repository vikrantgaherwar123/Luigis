import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { SidenavService } from '../services/sidenav.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  @ViewChild('rightSidenav',{static:true}) public sidenav: MatSidenav;
  itemList: any[] = [];
  duplicateList: any[];
  total = 0;
  count: any;

  constructor(private sidenavService: SidenavService,
    public dialogRef: MatDialogRef<SidenavComponent>, @Inject(MAT_DIALOG_DATA) public data) {	}

	ngOnInit(): void {
    // this.sidenavService.setSidenav(this.sidenav);
    this.itemList.push(this.data);
    this.count = this.itemList.length;
    
    
  }

  clear(){
    this.itemList = []
    // this.sidenavService.close();
  }
  
  // ngDoCheck(){
  //   this.itemList = this.sidenavService.getItem();
  //   // this.duplicateList = this.itemList
  //   console.log(this.itemList);
  //   // this.itemList.filter(item1 => {
  //   //   item1.count = 0
  //   //   this.duplicateList.filter(item2 => {
  //   //     if(item1.item.trim() == item2.item.trim() ){
  //   //       item1.count++
  //   //     }
  //   //   })
  //   // })
  //   this.itemList.filter(obj => {
  //     obj.count = 1;
  //   })
  //   var obj = {};
   
    
  //   //You can filter based on Id or Name based on the requirement
  //   var uniqueClients = this.itemList.filter(function (item) {
  //     if (obj.hasOwnProperty(item.item)) {
  //       item.count++
  //       // item.prize = item.prize * item.count
  //       return false;
  //     } else {
  //       obj[item.item] = true;
  //       return true;
  //     }
  //   });
  //   this.itemList = uniqueClients;

  //   // this.itemList.filter(item =>{
  //   //  this.total +=  parseFloat(item.prize)
  //   // })
  // }

}
