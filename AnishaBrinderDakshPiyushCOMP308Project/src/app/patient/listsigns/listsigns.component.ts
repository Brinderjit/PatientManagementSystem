import { Component, OnInit } from '@angular/core';
import { PatientService} from '../patient.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-listsigns',
  templateUrl: './listsigns.component.html',
  styleUrls: ['./listsigns.component.css']
})
export class ListsignsComponent implements OnInit {
 signs:any;
    errorMessage: string;
  constructor(private _router: Router,private _patientservice:PatientService) { }


  ngOnInit() {
     this._patientservice.listSigns().subscribe(signs => this.signs
            = signs,error => this.errorMessage = error);
  }

}