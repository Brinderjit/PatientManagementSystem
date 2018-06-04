import { Component, OnInit } from '@angular/core';

import { PatientService} from '../../patient/patient.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-createsigns',
  templateUrl: './createsigns.component.html',
  styleUrls: ['./createsigns.component.css']
})
export class CreatesignsComponent implements OnInit {
    signs:any = {};

    errorMessage: string;
  constructor(private _router: Router,private _patientservice:PatientService) { }

  ngOnInit() {
     
  }
  create() {
       
   
        this._patientservice
            .createSigns(this.signs)
            .subscribe(createdCourse => this._router.navigate(['/patient']),
            error => this.errorMessage = error);
    }

}