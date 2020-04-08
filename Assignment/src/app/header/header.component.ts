import { Component, OnInit } from '@angular/core';
import{ Router } from '@angular/router'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
userName = 'Novopay';
  constructor(public router:Router) { }

  ngOnInit() {
  }

  openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  
  closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
  }

  newBooking(){
this.router.navigate(['/NewBooking']);
  }

  myContact(){
    this.router.navigate(['/Contact']); 
  }

  myAbout(){
    this.router.navigate(['/About']); 
  }

}
