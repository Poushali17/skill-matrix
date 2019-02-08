import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  uri = 'http://localhost:4000';

  constructor(private http: HttpClient) { }
  // Service to get all user details
  getUserDetails() {
    return this.http.get(`${this.uri}/user`);
  }

  // Service to get user details by employeeid
  getUserDetailsById(employeeid) {
    return this.http.get(`${this.uri}/user/${employeeid}`);
  }

  // authenticateUser(user){
  //   return this.http.post(`${this.uri}/users/authenticate`, user);
  // }

  // Service to add users
  addUser(employeeid, employeename, password) {
    const user = {
      employeeid: employeeid,
      employeename: employeename,
      password: password
    };
    return this.http.post(`${this.uri}/user/add`, user);
  }

   // Service to update user profile
  updateProfile(id, employeename, designation, project, password) {
    const profile = {
      employeename: employeename,
      designation: designation,
      project: project,
      password: password
    };
    return this.http.post(`${this.uri}/profile/update/${id}`, profile);
  }

  // Service to delete user 
  deleteUser(id) {
    return this.http.get(`${this.uri}/user/delete/${id}`);
  }
}
