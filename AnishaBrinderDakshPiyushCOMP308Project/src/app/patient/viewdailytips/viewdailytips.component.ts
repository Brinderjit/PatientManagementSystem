import { Component, OnInit } from '@angular/core';
import { NurseService} from '../../nurse/nurse.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-viewdailytips',
  templateUrl: './viewdailytips.component.html',
  styleUrls: ['./viewdailytips.component.css']
})
export class ViewdailytipsComponent implements OnInit {

  dailytip:any;
    errorMessage: string;
  constructor(private _router: Router,private _nurseservice:NurseService) { }


  ngOnInit() {
     this._nurseservice.getdailytip().subscribe(dailytip=>this.dailytip=dailytip);
  }
}



