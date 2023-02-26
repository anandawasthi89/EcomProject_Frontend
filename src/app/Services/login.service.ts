import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http : HttpClient) { }

  UserStr:any;

  //generate token

  public generateToken(loginData: any){
    return this.http.post(`${baseUrl}/generateToken`,loginData);
  }

  public getCurrentUser(){
    console.log("enter here");
    return this.http.get(`${baseUrl}/Users/currentuser`);
  }

  public loginUser(token:any){
    localStorage.setItem("token",token["token"]);
    return true;
  }

  public isLoggedIn(){
    let tokenStr= localStorage.getItem("token");
    if(tokenStr==undefined||tokenStr==''||tokenStr==null){
      return false;
    }
      return true;
  }

  public logout(){
    if(this.isLoggedIn()){
      localStorage.removeItem("token");
      localStorage.removeItem('user');
      return true;
    }
    return false;
  }

  public getToken(){
    if(this.isLoggedIn()){
      let tokenstr = localStorage.getItem("token");
      if(tokenstr!=null){
      return tokenstr;
      }
    }
    return false;
  }

  public setUser(user:any){
    localStorage.setItem('user',JSON.stringify(user));
  }

  public getUser(){
    this.UserStr = localStorage.getItem("user");
    if(this.UserStr!=null){
      return JSON.parse(this.UserStr);
    }else{
      return null;
    }
    return false;
  }

  




}
