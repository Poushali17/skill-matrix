import { Component, OnInit } from '@angular/core';
import { Router, Route, NavigationExtras } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { RegistrationValidator } from '../../../validators/register.validator';
import { MatSnackBar } from '@angular/material';

import { SkillService } from '../../skill.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isFormVisible = true;
  params;
  loginFormGroup: FormGroup;
  registrationFormGroup: FormGroup;
  passwordFormGroup: FormGroup;
  employeeid: Number;
  password: String;
  message = "Loggedin Successfully";
  action = "OK";
  loginDetails: Object;
  constructor(private router: Router, private formBuilder: FormBuilder, private skillService: SkillService, public snackBar: MatSnackBar) {
    this.params = this.router.url;
    if (this.params === '/register') {
      this.isFormVisible = false;
    }

    this.loginFormGroup = this.formBuilder.group({
      employeeid: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.passwordFormGroup = this.formBuilder.group({
      createpassword: ['', Validators.required],
      confirmpassword: ['', Validators.required]
    }, {
        validator: RegistrationValidator.matchPassword
      });
    this.registrationFormGroup = this.formBuilder.group({
      employeename: ['', Validators.required],
      employeeid: ['', Validators.required],
      passwordFormGroup: this.passwordFormGroup
    });

  }

  ngOnInit() {
    this.skillService.getUserDetails().subscribe((data) => {
      console.log(data);
    });
  }

  //login method
  onClickLogin(loginvalue) {
    // this.router.navigate([{outlets: {content: ['home/editprofile']}}]);
    // this.router.navigate(['/home']);
    const user = {
      employeeid: loginvalue.employeeid,
      password: loginvalue.password
    }
    let navigationExtras: NavigationExtras = {
      queryParams: {
        "employeeid": user.employeeid,
        // "displayContent": true
        //  "password": user.password
      }
    };
    this.router.navigate(['home'], navigationExtras);
    this.snackBar.open(this.message, this.action, {
      duration: 5000,
    });

    // this.skillService.getLoginDetails(user.employeeid).subscribe((data) => {
    //   this.loginDetails = data;
    //   console.log(this.loginDetails);
    // });
  }

  onClickRegister(registrationvalue) {
    alert('Registered!!');

    const user = {
      employeename: registrationvalue.employeename,
      employeeid: registrationvalue.employeeid,
      password: registrationvalue.passwordFormGroup.createpassword
    }
    this.skillService.addUser(user).subscribe((data) => {
      console.log(data);
    })
  }

}
