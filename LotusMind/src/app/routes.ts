import { Routes } from '@angular/router';

import { LandingComponent } from './landing/landing.component';
import { HomeComponent } from './home/home.component';
import { AssignmentComponent } from './assignment/assignment.component';
import { GradeComponent } from './grades/grades.component';

export const appRoutes:Routes = [
    { path: 'assignment', component: AssignmentComponent },
    { path: 'grade', component: GradeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'lotusmind', component: LandingComponent },
    { path: '', redirectTo: '/lotusmind', pathMatch:'full'},
    { path: 'user', loadChildren:'src/app/user/user.module#UserModule'}
]