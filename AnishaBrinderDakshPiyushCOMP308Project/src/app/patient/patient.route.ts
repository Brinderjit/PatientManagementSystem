import { Routes } from '@angular/router';
import { PatientComponent} from './patient.component';
import { CreatesignsComponent } from './createsigns/createsigns.component';
import { ListsignsComponent } from './listsigns/listsigns.component';
import {ViewdailytipsComponent } from './viewdailytips/viewdailytips.component';
import { CreatealertComponent} from './createalert/createalert.component';
import { SymptomcheckComponent} from './symptomcheck/symptomcheck.component';
export const PatientRoutes: Routes = [{
    path: 'patient',
    component: PatientComponent,
    children: [
        { path: '', component: ListsignsComponent },
        { path: 'create', component: CreatesignsComponent},
         { path: 'viewtip', component: ViewdailytipsComponent},
          { path: 'alert', component: CreatealertComponent},
                    { path: 'check', component: SymptomcheckComponent},
       
    ],
}];