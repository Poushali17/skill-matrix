import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css']
})
export class EditprofileComponent implements OnInit {

  editProfileFormGroup = new FormGroup({
    name: new FormControl(''),
    designation: new FormControl(''),
    project: new FormControl(''),
    password: new FormControl(''),
  });
  
  constructor() { }

  ngOnInit() {
  }

  // Edit Profile Methosd
  editProfile(profilevalue) {
    console.log(profilevalue);
  }

}
