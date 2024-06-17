import { Component, HostListener,ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  // isSidebarActive = false;
  constructor(public router: Router) {}

  // toggleSidebar() {
  //   this.isSidebarActive = !this.isSidebarActive;
    
  // }



}
