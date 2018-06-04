import { Component, OnInit } from '@angular/core';
import { PatientService} from '../../patient/patient.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-createalert',
  templateUrl: './createalert.component.html',
  styleUrls: ['./createalert.component.css']
})
export class CreatealertComponent implements OnInit {
alert:any = {};
  errorMessage :string;
  constructor(private _router: Router,private _patientservice:PatientService) { }

  ngOnInit() {
  }
 create() {
       
   
        this._patientservice
            .createAlerts(this.alert)
            .subscribe(res => this.errorMessage =res.message,
            error => this.errorMessage = error);
    }

}

