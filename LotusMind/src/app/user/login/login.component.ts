import { Component } from '@angular/core';
import { UserAuthService } from '../user-auth-shared/userauth.service';
import { Router } from '@angular/router';

@Component({
    templateUrl: './login.component.html',
    styles:[
        `
        p { font-size: 12px; padding-left: 10px; color:#D91E18; }
        
        button { margin: 5px; text-align:center;}
        div { 
            
            display: block;
            margin: 0 auto;
            border:0px solid black; 
        }
        div > h1 {
            text-align: center;
        }
        input {
            margin: 5px;
        }
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

    /*cancel(){
        if(this.userAuth.isAuthenticated()){
            this.route.navigate(['home'])
        }else{
            this.route.navigate(['lotusmind'])
        }
            
    }*/

}