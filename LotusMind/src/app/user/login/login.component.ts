import { Component, OnInit } from '@angular/core';
import { UserAuthService } from '../user-auth-shared/userauth.service';
import { Router } from '@angular/router';
import { OrganisationService } from '../../global-shared/organisation.service';

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

export class LoginComponent implements OnInit{

    userid: string
    passwd: string
    org_id: number
    mouseoverLogin

    organisation: any
    authlogin: any

    constructor(private userAuth: UserAuthService, 
        private orgs:OrganisationService, 
        private route:Router){}

    ngOnInit() {
        this.orgs.getAllOrgs().subscribe(
            data => {this.organisation = data}
        );
    }

    login(formValues){

        this.userAuth.loginUser(formValues)
      
        //this.route.navigate(['home'])
    }

    /*cancel(){
        if(this.userAuth.isAuthenticated()){
            this.route.navigate(['home'])
        }else{
            this.route.navigate(['lotusmind'])
        }
            
    }*/

}