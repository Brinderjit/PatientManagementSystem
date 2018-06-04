import { Component, OnInit } from '@angular/core';
import { PatientService} from '../../patient/patient.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-symptomcheck',
  templateUrl: './symptomcheck.component.html',
  styleUrls: ['./symptomcheck.component.css']
})
export class SymptomcheckComponent implements OnInit {

   
    errorMessage: string;
    info: any = {};
    result: any;
    infonew:any={};
   
  constructor(private _router: Router,private _patientservice:PatientService) { }


  ngOnInit() {
  }
check() {
      if (this.info.fever == true){
        this.infonew.fever = 'yes'
      } else {
        this.infonew.fever = 'no'
      }
    
      if (this.info.cough == true){
        this.infonew.cough = 'yes'
      } else {
        this.infonew.cough = 'no'
      }
      if (this.info.fatigue == true){
        this.infonew.fatigue = 'yes'
      } else {
        this.infonew.fatigue = 'no'
      }
      this.infonew.age = this.info.age;
 
      console.log(this.info)
      this._patientservice
          .checksymptoms(this.info)
          .subscribe(result => this.result = JSON.stringify(result)),
          error => this.errorMessage = error;
    }
}

