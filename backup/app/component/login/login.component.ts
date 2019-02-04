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
  }

  //login method
  onClickLogin(loginvalue) {
    this.router.navigateByUrl('/profile/skills');
    this.snackBar.open(this.message, this.action, {
      duration: 5000,
    });
    // console.log(loginvalue.employeeid);
    // const user = {
    //   employeeid: loginvalue.employeeid,
    //   password: loginvalue.password
    // }

    // this.skillService.getLoginDetails(user).subscribe((data) => {
    //   console.log(data);
    // });

    // this.landing = false;
  }

}
