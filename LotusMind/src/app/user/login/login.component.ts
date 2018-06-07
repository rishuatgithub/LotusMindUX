import { Component } from '@angular/core';
import { UserAuthService } from '../user-auth-shared/userauth.service';
import { Router } from '@angular/router';

@Component({
    templateUrl: './login.component.html',
    styles:[
        `
        em { color: red; float: right; padding-left: 10px; }
        label { color: black; font-size: 18px; }
        `
    ]

})

export class LoginComponent{

    userName: string
    password: string
    mouseoverLogin

    constructor(private userAuth: UserAuthService, private route:Router){}

    login(formValues){
        console.log(formValues)

        this.userAuth.loginUser(formValues.userName, formValues.password)
        this.route.navigate(['home'])
    }

    cancel(){
        this.route.navigate(['home'])
    }

}