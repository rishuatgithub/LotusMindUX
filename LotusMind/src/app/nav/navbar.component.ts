import { Component } from '@angular/core';
import { UserAuthService } from '../user/user-auth-shared/userauth.service';

@Component({
    selector:'nav-bar',
    templateUrl:'./navbar.component.html',
    styles: [`
        div {border: 0px solid black;}
        ul { border: 0px solid red; width:100%;   }
        
        
    `]
})

export class NavBarComponent{

    constructor(private userAuth: UserAuthService){}
    
}