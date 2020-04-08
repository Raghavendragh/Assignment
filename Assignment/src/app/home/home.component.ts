import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products:any; name:any; email:any; id:any;
  constructor(private router: Router,private http: HttpClient) { 
    
  }

  ngOnInit() {
    
    // let headers = new Headers({ 'Content-Type':'application/json','Accept': 'application/json','Authorization': 'Bearer ' + window.localStorage.getItem('auth_key')});
    // let options = new RequestOptions({ headers: headers });
    this.http.get("assets/products.json").subscribe(data =>{
      this.products = data;
          })
  
  }

  back(){
    this.router.navigate(['/header'])
  }

}
