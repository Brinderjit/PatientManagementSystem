
import { Component, OnInit } from '@angular/core';
import { NurseService} from '../nurse.service';
import { PatientService} from '../../patient/patient.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-createdailytips',
  templateUrl: './createdailytips.component.html',
  styleUrls: ['./createdailytips.component.css']
})
export class CreatedailytipsComponent implements OnInit {
  dailytip:any={};
  success:string;
  errorMessage :string;
  constructor(private _router: Router,private _nurseservice:NurseService,private _patientservice:PatientService) { }

  ngOnInit() {
  }
 create() {
       
   console.log(this.dailytip);
        this._nurseservice
            .createdailytip(this.dailytip)
            .subscribe(res=>this.success=res.message ,
            error => this.errorMessage = error);
    }
   
}
