import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
    selector:'sign-up',
    templateUrl:'./user-signup.component.html',
    styles:[`
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
    

    constructor(private route: Router){}

    ngOnInit(){

        let schoolName = new FormControl()
        let emailID = new FormControl()
        let firstName = new FormControl()
        let lastName = new FormControl()
        let password = new FormControl()

        this.signupForm = new FormGroup({
            schoolName:schoolName,
            emailID: emailID,
            firstName: firstName,
            lastName: lastName,
            password: password
        })

    }

    cancel(){
        this.route.navigate(['home'])
    }

    addUser(formValues){
        console.log("sign up successful")
        alert("sign up successful")
        this.route.navigate(['user/login'])
    }
}