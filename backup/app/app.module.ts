import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
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

import { AppComponent } from './app.component';
import { WelcomeComponent } from './component/welcome/welcome.component';
import { LoginComponent } from './component/login/login.component';
// import { HomeComponent } from './component/home/home.component';
// import { SkillComponent } from './component/skill/skill.component';
// import { EditprofileComponent } from './component/editprofile/editprofile.component';
// import { SkilldetailsComponent } from './component/skilldetails/skilldetails.component';
// import { SidenavComponent } from './component/sidenav/sidenav.component';
import { PageNotFoundComponent } from './component/pagenotfound/pagenotfound.component';

import { SkillService } from './skill.service';

// import { HomeModule } from './component/home/home.module';

import { RoutingModule } from './routing/routing.module';
// import { HomeRoutingModule } from './component/home/home-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    LoginComponent,
    // HomeComponent,
    // SkillComponent,
    // EditprofileComponent,
    // SkilldetailsComponent,
    // SidenavComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FlexLayoutModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatSnackBarModule,
    MatSidenavModule,
    MatDividerModule,
    MatListModule,
    MatTableModule,
    MatIconModule,
    MatPaginatorModule,
    // HomeModule,
    RoutingModule
    // HomeRoutingModule
  ],
  providers: [SkillService],
  bootstrap: [AppComponent]
})
export class AppModule { }
