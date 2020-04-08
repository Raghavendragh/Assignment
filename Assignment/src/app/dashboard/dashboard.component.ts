import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import{MyDetailsService} from '../my-details.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  products:any; name:any; email:any; id:any;newRoom:any;loginUser:any
  constructor(private router: Router,private myDetailsService: MyDetailsService,private http: HttpClient) { 
    
  }

  ngOnInit() {
    
    // let headers = new Headers({ 'Content-Type':'application/json','Accept': 'application/json','Authorization': 'Bearer ' + window.localStorage.getItem('auth_key')});
    // let options = new RequestOptions({ headers: headers });
this.newRoom = this.myDetailsService.getData();
this.loginUser =   this.myDetailsService.getLogin();
  }

  back(){
    this.router.navigate(['/header'])
  }

}
