import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SkillService {
  
  uri = 'http://localhost:4000';

  constructor(private http: HttpClient) { }

  getLoginDetails(user) {
    return this.http.post(`"${this.uri}/login`, user);
  }

  // authenticateUser(user){
  //   return this.http.post(`${this.uri}/users/authenticate`, user);
  // }
}
