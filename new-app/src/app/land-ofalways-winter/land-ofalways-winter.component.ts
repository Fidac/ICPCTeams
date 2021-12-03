import { HttpService } from './../http.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-land-ofalways-winter',
  templateUrl: './land-ofalways-winter.component.html',
  styleUrls: ['./land-ofalways-winter.component.scss']
})
export class LandOFAlwaysWinterComponent implements OnInit {

  brew: Object | any;
// Dependency Injection
  constructor(private _http:HttpService) { }

  ngOnInit() {
    this._http.myMethod().subscribe(data =>{
      this.brew = data;
      console.log(this.brew)
    });
  }

}
