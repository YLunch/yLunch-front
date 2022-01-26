import { Injectable } from '@angular/core';
import {User} from "../models/User";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private httpClient:HttpClient) { }

  async getRegistration(value:User) {
    const response= await this.httpClient.post<User>(environment.url+"/restaurant-admins",value).toPromise();
    console.log(response);
/*
    let user:User={link: "ab",
      id: "ab",
      email: "ab",
      firstName : "ab",
      lastName : "ab",
      phoneNumber : "ab",
      roles :["test"]
    };

      return user;
*/

  }
}
