import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { NavBarComponent } from './nav/navbar.component';
import { HomeComponent } from './home/home.component';
import { AssignmentComponent } from './assignment/assignment.component';
import { GradeComponent } from './grades/grades.component';

import { CollapsibleDetailsComponent } from './assignment/shared/collapsible-details.component';

import { AssignmentService } from './assignment/shared/assignment.service';
import { UserAuthService } from './user/user-auth-shared/userauth.service';

import { appRoutes } from './routes';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    NavBarComponent,
    HomeComponent,
    AssignmentComponent,
    GradeComponent,
    CollapsibleDetailsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    AssignmentService,
    UserAuthService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
