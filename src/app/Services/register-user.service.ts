import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class RegisterUserService {

  constructor(private http: HttpClient) { }

  public registerNewUser(newUser:any){
    return this.http.post(`${baseUrl}/Users/addUser`,newUser)
  }
}