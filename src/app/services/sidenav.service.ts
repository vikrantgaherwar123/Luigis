import { Injectable } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { SidenavComponent } from '../sidenav/sidenav.component'

@Injectable({
  providedIn: 'root'
})
export class SidenavService {
  setItem: any[] = [];

  constructor() { }
  private sidenav: MatSidenav;

	public setSidenav(sidenav: MatSidenav) {
		this.sidenav = sidenav;
  }
  
  /**
   * getItem
   */
  public getItem() {
    return this.setItem
  }

	public open(data) {
    this.setItem.push(data);
		return this.sidenav.open();
	}


	public close() {
    this.setItem = []
		return this.sidenav.close();
	}

	public toggle(): void {
		this.sidenav.toggle();
	}
}
