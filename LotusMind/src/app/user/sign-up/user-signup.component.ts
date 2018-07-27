import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { OrganisationService } from '../../global-shared/organisation.service';

@Component({
    selector:'sign-up',
    templateUrl:'./user-signup.component.html',
    styles:[`
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

    `]
})

export class UserSignupComponent implements OnInit{

    signupForm: FormGroup
    organisation: any
    
    org_id: number
    email: string
    fname: string
    lname: string
    upasswd: string

    constructor(private route: Router, private orgs:OrganisationService){}

    ngOnInit(){

        // get the list of schools
        this.orgs.getAllOrgs().subscribe(
            data => {this.organisation = data}
        );

        let org_id = new FormControl()
        let emailID = new FormControl()
        let firstName = new FormControl()
        let lastName = new FormControl()
        let password = new FormControl()

        this.signupForm = new FormGroup({
            org_id: org_id,
            email: emailID,
            fname: firstName,
            lname: lastName,
            upasswd: password            
        })

    }

    cancel(){
       // this.route.navigate(['home'])
    }

    addUser(formValues){
        console.log("sign up successful")
        alert("sign up successful")
        this.route.navigate(['user/login'])
    }
}