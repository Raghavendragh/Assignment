import { Component, OnInit } from '@angular/core';
import{ Router } from '@angular/router'
import{MyDetailsService} from '../my-details.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
loggedIn:any;
  constructor(public router:Router,private myDetailsService: MyDetailsService) { }

  ngOnInit() {
    this.loggedIn =  this.myDetailsService.getLogin();  
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
