import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../models/User";
import {environment} from "../../../environments/environment";
import {Token} from "../models/Token";

@Injectable({
  providedIn: 'root'
})
export class AuthentificateService {

  constructor(private httpClient:HttpClient) { }

  async getAuthentificate(value:User) {
    return  await this.httpClient.post<Token>(environment.url+"/authentication/login",value).toPromise();
  }
}
