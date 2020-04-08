import { Component, OnInit } from '@angular/core';
import{ Router } from '@angular/router'
import{MyDetailsService} from '../my-details.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  name;
  password;
  constructor(public router:Router,private myDetailsService: MyDetailsService) { }

  ngOnInit() {
  }

  mySubmit(){
    if (this.name != undefined && this.password != undefined){
      this.myDetailsService.setLogin(this.name);
this.router.navigate(['/header']);
    }
    else if (this.name == '' || this.name == null || this.name == undefined){
  alert('Username is required');
    }else if (this.password == '' || this.password == null || this.password == undefined){
      alert('Password is required');
        }
}
}
