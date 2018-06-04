import { Component, OnInit } from '@angular/core';
import { NurseService} from '../nurse.service';
import { PatientService} from '../../patient/patient.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-createsigns',
  templateUrl: './createsigns.component.html',
  styleUrls: ['./createsigns.component.css']
})
export class CreatesignsComponent implements OnInit {
    signs:any= {};
    optionSelected:any;
    patients: any;
    errorMessage: string;
  constructor(private _router: Router,private _nurseservice:NurseService,private _patientservice:PatientService) { }

  ngOnInit() {

      this._patientservice.listUsers().subscribe(patients => this.patients=patients);
      console.log(this.patients);
  }
  create() {
       
        this.signs.patient=this.optionSelected;
        this._nurseservice
            .createSigns(this.signs)
            .subscribe(createdCourse => this._router.navigate(['/nurse']),
            error => this.errorMessage = error);
    }

}
