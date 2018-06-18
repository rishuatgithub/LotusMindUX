import { Injectable } from '@angular/core';
import { IUser } from './userauth.model';

@Injectable()
export class UserAuthService{

    currentUser: IUser;

    loginUser(userName: String, password: String, orgid: number){

        this.currentUser = {
            id: 1,
            firstName: 'Rishu',
            lastName: 'Shrivastava',
            userName: 'rishu'
        }
    }

    isAuthenticated(){
        return !!this.currentUser
    }

    saveUserProfile(firstname: string, lastname: string){
        this.currentUser.firstName = firstname
        this.currentUser.lastName = lastname

    }

}