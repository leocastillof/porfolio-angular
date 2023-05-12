import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JwtDto } from '../model/jwt-dto';
import { LoginUser } from '../model/login-user';
import { NewUser } from '../model/new-user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

 // authURL = 'http://localhost:8080/auth/';
 authURL = 'https://porfolio-backend-lnwc.onrender.com';

  constructor(private httpClient: HttpClient) { }

  public newU(newUser : NewUser): Observable<any>{
    return this.httpClient.post<any>(this.authURL + 'newUser', newUser);
  }

  public loginU(loginUser : LoginUser): Observable<any>{
    return this.httpClient.post<JwtDto>(this.authURL + 'login', loginUser);
  }
}
