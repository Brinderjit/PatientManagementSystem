import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
    errorMessage: string;
    credentials: any = {};
    constructor(private _authenticationService: AuthenticationService,
        private _router: Router) { }
    //handle any value event with the
    //first arrow function and any error with the second arrow function
    signin() {
        //this._router.navigate(['/courses']);
        this._authenticationService.signin(
            this.credentials).subscribe(result =>this.signInSuccess(result),
            error => this.errorMessage = error);
    }
    signInSuccess(user:any){

        if(user.type=='patient')
        {
            this._router.navigate(['/patient']);
        }
        
        else{
            this._router.navigate(['/nurse']);
        }
    }
    signout() {
    }
}