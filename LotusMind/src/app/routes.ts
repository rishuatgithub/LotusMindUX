import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AssignmentComponent } from './assignment/assignment.component';
import { GradeComponent } from './grades/grades.component';

export const appRoutes:Routes = [

    { path: 'assignment', component: AssignmentComponent },
    { path: 'grade', component: GradeComponent },
    { path: 'home', component: HomeComponent },
    { path: '', redirectTo: '/home', pathMatch:'full'}
]