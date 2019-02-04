import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from '../app.component';
import { WelcomeComponent } from '../component/welcome/welcome.component';
import { LoginComponent } from '../component/login/login.component';
// import { SkilldetailsComponent } from '../component/skilldetails/skilldetails.component';
// import { SidenavComponent } from '../component/sidenav/sidenav.component';
import { HomeComponent } from '../component/home/home.component';
import { SkillComponent } from '../component/skill/skill.component';
import { EditprofileComponent } from '../component/editprofile/editprofile.component';
import { PageNotFoundComponent } from '../component/pagenotfound/pagenotfound.component';

const routes: Routes = [
  { path: 'welcome', component: WelcomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: LoginComponent },
  {
    path: 'home', component: HomeComponent,
    children: [
      // {
      //   path: 'home',
      //   component: HomeComponent,
      //   outlet: 'content'
      // },
      {
        path: 'editprofile',
        component: EditprofileComponent,
        outlet: 'content'
      },
      {
        path: 'addSkill',
        component: SkillComponent,
        outlet: 'content'
      }
    ]
  },
  { path: 'home/editprofile', component: EditprofileComponent },
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
  // { path: 'home', loadChildren: '../component/home/home.module#HomeModule' },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class RoutingModule { }
