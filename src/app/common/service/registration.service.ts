import { Injectable } from '@angular/core';
import {Users} from "../models/Users";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private httpClient:HttpClient) { }

  getRegistration(value:any) {
    //const response=this.httpClient.post<Users>(environment.url+"",value);
    let user:Users={link: "ab",
      id: "ab",
      email: "ab",
      firstName : "ab",
      lastName : "ab",
      phoneNumber : "ab"};
    
      return user;
  }
}
