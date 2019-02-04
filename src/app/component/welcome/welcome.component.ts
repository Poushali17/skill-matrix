import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  title = 'Skill Matrix';
  landing : boolean = true;
  constructor(private router: Router) { }

  //login method
  login() {
    this.router.navigateByUrl('/login');
    this.landing = false;
  }

  //register method
  register() {
    this.router.navigateByUrl('/register');
    this.landing = false;
  }

  ngOnInit() {
  }

}
