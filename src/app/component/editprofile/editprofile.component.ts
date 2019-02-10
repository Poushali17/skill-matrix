import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { SkillService } from '../../skill.service';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css']
})
export class EditprofileComponent implements OnInit {

  id: Object;

  editProfileFormGroup = new FormGroup({
    name: new FormControl(''),
    designation: new FormControl(''),
    project: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private skillService: SkillService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams
      .subscribe(params => {
        this.id = params.id;
        console.log(this.id);
      })
  }

  // Edit Profile Methosd
  editProfile(profilevalue) {
    console.log(profilevalue);
    const user_profile = {
      employeename: profilevalue.name,
      designation: profilevalue.designation,
      project: profilevalue.project,
      password: profilevalue.password
    }
    this.skillService.updateProfile(this.id, user_profile).subscribe((data) => {
      console.log(data);
    });
  }

}
