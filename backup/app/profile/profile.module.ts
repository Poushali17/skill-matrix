import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkilldetailsComponent } from './component/skilldetails/skilldetails.component';

import { Routes, RouterModule } from '@angular/router';

import {
  MatButtonModule,
  MatCardModule,
  MatInputModule,
  MatSnackBarModule,
  MatSidenavModule,
  MatDividerModule,
  MatListModule,
  MatTableModule,
  MatIconModule,
  MatPaginatorModule
} from '@angular/material';

const routes: Routes = [
    { path: 'skills', component: SkilldetailsComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatSnackBarModule,
    MatSidenavModule,
    MatDividerModule,
    MatListModule,
    MatTableModule,
    MatIconModule,
    MatPaginatorModule
  ],
  declarations: [SkilldetailsComponent]
})
export class ProfileModule { }
