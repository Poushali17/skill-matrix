import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkilldetailsComponent } from './skilldetails.component';

describe('SkilldetailsComponent', () => {
  let component: SkilldetailsComponent;
  let fixture: ComponentFixture<SkilldetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkilldetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkilldetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
