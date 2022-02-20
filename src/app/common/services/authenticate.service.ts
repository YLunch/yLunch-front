import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { environment } from '../../../environments/environment'
import {User} from "../models/User";
import {Token} from "../models/Token";

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  constructor(private httpClient: HttpClient) {
  }

  async getAuthenticate(value: User) {
    return await this.httpClient.post<Token>(environment.url + "/authentication/login", value).toPromise();
  }
}
