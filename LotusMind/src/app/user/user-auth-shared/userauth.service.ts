import { Injectable } from '@angular/core';
import { IUser, ILogin,AppResponse } from './userauth.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
};

@Injectable()
export class UserAuthService{

    currentUser: IUser;
    login: ILogin;

    constructor(private http:HttpClient){}

    loginUser(loginFormData){

        /*this.currentUser = {
            id: 1,
            firstName: 'Rishu',
            lastName: 'Shrivastava',
            userName: 'rishu'
        }*/
        return this.http.post<AppResponse>('/serverapi/login/signin',
            JSON.stringify(loginFormData),
            httpOptions).subscribe(
                res => {
                    console.log(res)
                    console.log(res.response_result)

                    //this.currentUser.userid = res.response_result;

                    return res
                    //this.route.navigate(['home']);
                },
                error =>{
                    return error;
                }
            )

    }

    isAuthenticated(){
        return !!this.currentUser
    }

    saveUserProfile(firstname: string, lastname: string){
        this.currentUser.fname = firstname
        this.currentUser.lname = lastname

    }

}