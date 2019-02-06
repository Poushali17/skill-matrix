import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {

  skillFormGroup = new FormGroup({
    skill: new FormControl(''),
    proficiency: new FormControl(''),
    experience: new FormControl(''),
  });
  constructor() { }

  ngOnInit() {
  }

  // Add Skill Methid
  addSkill(skillvalue) {
    console.log(skillvalue);
  }
}
