import { Component } from '@angular/core';
import { AuthenticationService } from './authentication/authentication.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    user: any;
    isLoggedIn$: boolean 

    constructor(private _authenticationService:
        AuthenticationService , private router:Router) {
      
    }
   
    ngOnInit( ) {
       this._authenticationService.loggedIn.subscribe(response => this.isLoggedIn$ = response);
        this._authenticationService.user1.subscribe(response => this.user = response);
  }
   signout(){
       this._authenticationService.signout();
        this.router.navigate(['/authentication/signin']);
    }
 
}
