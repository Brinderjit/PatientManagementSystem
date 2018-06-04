import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthenticationModule } from './authentication/authentication.module';
import { HomeComponent } from './home/home.component';
import { HomeModule } from './home/home.module';
import { AppRoutes} from './app.routes';
import { HttpModule } from '@angular/http';
import { TokenInterceptor } from './authentication/authentication.interceptor';
import {AuthenticationService } from './authentication/authentication.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { PatientService } from './patient/patient.service';
import { NurseService } from './nurse/nurse.service';
import { NurseModule} from './nurse/nurse.module';
import { PatientModule } from './patient/patient.module';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,

  
   
  
  ],
  imports: [
   
    HttpClientModule,
    AuthenticationModule,
    HomeModule ,
    BrowserModule,
       HttpModule,
       PatientModule,
       NurseModule,
    
     RouterModule.forRoot(AppRoutes),
  ],
  providers: [  {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },AuthenticationService,NurseService,PatientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
