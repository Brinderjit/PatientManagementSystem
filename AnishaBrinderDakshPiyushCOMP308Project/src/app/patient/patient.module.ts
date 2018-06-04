import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {PatientComponent } from './patient.component';
import{PatientRoutes} from './patient.route'
import {CreatesignsComponent } from './createsigns/createsigns.component';
import {ListsignsComponent } from './listsigns/listsigns.component';
import {ViewdailytipsComponent } from './viewdailytips/viewdailytips.component';
import {CreatealertComponent } from './createalert/createalert.component';
import { SymptomcheckComponent} from './symptomcheck/symptomcheck.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  imports: [FormsModule,
    CommonModule,
    RouterModule.forRoot(PatientRoutes)
  ],
  declarations: [PatientComponent,CreatesignsComponent,ListsignsComponent,ViewdailytipsComponent,CreatealertComponent,SymptomcheckComponent ]
})
export class PatientModule { }
