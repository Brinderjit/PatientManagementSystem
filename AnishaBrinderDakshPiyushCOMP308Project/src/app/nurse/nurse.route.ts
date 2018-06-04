import { Routes } from '@angular/router';
import { NurseComponent} from './nurse.component';
import { CreatesignsComponent } from './createsigns/createsigns.component';
import { ListsignsComponent } from './listsigns/listsigns.component';
import { CreatedailytipsComponent } from './createdailytips/createdailytips.component';
import { ViewalertsComponent } from './viewalerts/viewalerts.component';
export const NurseRoutes: Routes = [{
    path: 'nurse',
    component: NurseComponent,
    children: [
        { path: '', component: ListsignsComponent },
        { path: 'create', component: CreatesignsComponent},
         { path: 'createtip', component:CreatedailytipsComponent},
            { path: 'alerts', component:ViewalertsComponent},
    ],
}];