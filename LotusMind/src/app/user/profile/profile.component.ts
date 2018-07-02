import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserAuthService } from '../user-auth-shared/userauth.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './profile.component.html'
})

export class ProfileComponent implements OnInit {

  profileForm:FormGroup

  constructor(private route:Router, private authUser: UserAuthService){}

  ngOnInit(): void {
     let firstName = new FormControl(this.authUser.currentUser.fname, Validators.required)
     let lastName = new FormControl(this.authUser.currentUser.lname, Validators.required)
     
     this.profileForm = new FormGroup({
       
      firstName: firstName,
      lastName: lastName
     })
  }

  saveProfile(formValues){
    if(this.profileForm.valid){
      this.authUser.saveUserProfile(formValues.firstName, formValues.lastName)
      this.route.navigate(['home'])
    }
    
  }

  cancel(){
    this.route.navigate(['home'])
  }


}