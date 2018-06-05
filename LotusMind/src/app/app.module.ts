import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { NavBarComponent } from './nav/navbar.component';
import { HomeComponent } from './home/home.component';
import { AssignmentComponent } from './assignment/assignment.component';
import { GradeComponent } from './grades/grades.component';


import { AssignmentService } from './assignment/shared/assignment.service';

import { appRoutes } from './routes';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    AssignmentComponent,
    GradeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    AssignmentService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
