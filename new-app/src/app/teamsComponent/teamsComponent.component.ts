import {HttpService, Team} from './../http.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teamsComponent',
  templateUrl: './teamsComponent.component.html',
  styleUrls: ['./teamsComponent.component.scss']
})

export class TeamsComponent implements OnInit {

  brew: Object | any;
  // teams: Team[] | any;

// Dependency Injection
  constructor(private _http:HttpService) { }

  ngOnInit() {
    this._http.team().subscribe(data =>{
      this.brew = data;
      console.log("Object: " + this.brew)
    });
  }

}
