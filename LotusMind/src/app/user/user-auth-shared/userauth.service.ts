import { Injectable } from '@angular/core';
import { IUser } from './userauth.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
};

@Injectable()
export class UserAuthService{

    currentUser: IUser;
  
    constructor(private http:HttpClient){}

    loginUser(loginFormData){
      return this.http.post('/serverapi/login/signin',
        JSON.stringify(loginFormData),
        httpOptions)
            .pipe(tap(data =>{
                console.log(data)
                this.currentUser = data['response_result'];
            }))
            .pipe(catchError(err => {
                return of(false)
            }))
    }

    isAuthenticated(){
        return !!this.currentUser
    }

    saveUserProfile(firstname: string, lastname: string){
        this.currentUser.fname = firstname
        this.currentUser.lname = lastname

    }


    private handleError<T> (operation = 'operation', result?: T){
        return (error: any): Observable<T> => {
            console.error(error);
            return of(result as T)
        }
    }
}