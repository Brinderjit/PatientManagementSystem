import { Component, OnInit } from '@angular/core';
import { NurseService} from '../nurse.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-listsigns',
  templateUrl: './listsigns.component.html',
  styleUrls: ['./listsigns.component.css']
})
export class ListsignsComponent implements OnInit {
 signs:any;
    errorMessage: string;
  constructor(private _router: Router,private _nurseservice:NurseService) { }


  ngOnInit() {
     this._nurseservice.listSigns().subscribe(signs => this.signs=signs,error => this.errorMessage = error);
     console.log(this.signs);
  }

}
