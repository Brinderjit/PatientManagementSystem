import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NurseComponent } from './nurse.component';
import{NurseRoutes} from './nurse.route'
import { RouterModule } from '@angular/router';
import {CreatesignsComponent } from './createsigns/createsigns.component';
import {ListsignsComponent } from './listsigns/listsigns.component';
import {CreatedailytipsComponent } from './createdailytips/createdailytips.component';
import {ViewalertsComponent } from './viewalerts/viewalerts.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    RouterModule.forRoot(NurseRoutes)
  ],
  declarations: [NurseComponent,CreatesignsComponent,ListsignsComponent,CreatedailytipsComponent,ViewalertsComponent]
})
export class NurseModule { }
