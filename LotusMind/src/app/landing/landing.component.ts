import { Component } from '@angular/core';
import { UserAuthService } from '../user/user-auth-shared/userauth.service';
import { Router } from '@angular/router';

@Component({
    selector:'landing',
    templateUrl: './landing.component.html',
    styleUrls:['./landing.component.css']
})

export class LandingComponent{

    constructor(private userAuth: UserAuthService, private route:Router){}

    loginPage(){
        this.route.navigate(['user/login'])
    }

    newUserPage(){
        this.route.navigate(['user/signup'])
    }

}