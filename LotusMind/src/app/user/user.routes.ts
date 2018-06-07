import { ProfileComponent } from './profile/profile.component'
import { LoginComponent } from './login/login.component';
import { UserSignupComponent } from './sign-up/user-signup.component';


export const userRoutes = [
    { path: 'profile', component:ProfileComponent },
    { path: 'login', component:LoginComponent },
    { path: 'signup', component:UserSignupComponent}
]