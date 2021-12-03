import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-winter-fell',
  templateUrl: './winter-fell.component.html',
  styleUrls: ['./winter-fell.component.scss']
})
export class WinterFellComponent implements OnInit {
  clickCounter: number = 0;
  name: String= "valar morghulis";

  constructor() { }

  ngOnInit(): void {
  }
  countClick(){
    this.clickCounter += 1;
  }
  setClasses(){
    let myClasses = {
      active: this.clickCounter > 4,
      notactive: this.clickCounter <=4,
    }
    return myClasses;
  }

}
