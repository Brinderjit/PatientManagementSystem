import { Component, OnInit } from '@angular/core';
import { NurseService} from '../nurse.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-viewalerts',
  templateUrl: './viewalerts.component.html',
  styleUrls: ['./viewalerts.component.css']
})
export class ViewalertsComponent implements OnInit {

  signs:any;
    errorMessage: string;
  constructor(private _router: Router,private _nurseservice:NurseService) { }


  ngOnInit() {
     this._nurseservice.getAlerts().subscribe(signs => this.signs=signs,error => this.errorMessage = error);
     console.log(this.signs);
  }


}



