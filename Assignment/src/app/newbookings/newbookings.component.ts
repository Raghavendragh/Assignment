import { ChangeDetectionStrategy,Component, OnInit, ViewEncapsulation, ElementRef } from '@angular/core';
// import { Http,Response  } from '@angular/commomn/http';
// import { Headers, RequestOptions } from '@angular/http';
import {NgForm} from '@angular/forms';
import { Observable } from 'rxjs';
import { NgModel } from '@angular/forms';
import {FormGroup,FormControl,Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import{MyDetailsService} from '../my-details.service';
@Component({
  selector: 'app-newbookings',
  templateUrl: './newbookings.component.html',
  styleUrls: ['./newbookings.component.css']
})
export class NewbookingsComponent implements OnInit {
  products:any; selectedDate:any;loggedIn:any;
  floors:any; array:any; rooms:any
   selectedVal = {
       Date:'',
       timeTo:'',
       timeFrom:'',
       Agenda:'',
       name:''
  }
  public elementRef;

  constructor(private http: HttpClient,private myDetailsService: MyDetailsService,private router: Router,myElement: ElementRef) {
    this.elementRef = myElement;
  }

  ngOnInit() {
    this.http.get("assets/products.json").subscribe(data =>{
      this.products = data;
          })

     this.loggedIn =  this.myDetailsService.getLogin();   
  }

  back(){
    this.router.navigate(['/header'])
  }


  onRoomChange(value){
    this.selectedVal.name = value;
    console.log("valuethis.selectedVal.name of " + this.selectedVal.name);
    // this.getTimes();
    // this.checkBooking(this.dates[0].day,this.dates[4].day);
    // this.rooselect = 'true';
  }

  Create(){
    this.myDetailsService.setData(this.selectedVal);
this.router.navigate(['/Dashboard']);
  }

}
