import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from '../app.component';
import { WelcomeComponent } from '../component/welcome/welcome.component';
import { LoginComponent } from '../component/login/login.component';
import { PageNotFoundComponent } from '../component/pagenotfound/pagenotfound.component';

const routes: Routes = [
  { path: 'welcome', component: WelcomeComponent},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: LoginComponent },
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
  { path: 'profile', loadChildren: '../profile/profile.module#ProfileModule' },
  { path: '**', component: PageNotFoundComponent }
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
