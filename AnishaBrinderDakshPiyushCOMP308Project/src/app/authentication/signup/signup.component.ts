import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
    errorMessage: string;
    user: any = {};
    constructor(private _authenticationService: AuthenticationService,
        private _router: Router) { }
    signup() {
        this._authenticationService.signup(this.user)
            .subscribe(result=> this._router.navigate(['/authentication/signin']),
            error => this.errorMessage = error);
    }
}