import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyDetailsService {
  
  constructor() { }
  private mydata = {};
  private myLogin;
  setData(data){
    this.mydata = data;
  }

  getData(){
    return this.mydata;
  }

  setLogin(data){
this.myLogin = data
  }

getLogin(){
  return this.myLogin;
}
}
