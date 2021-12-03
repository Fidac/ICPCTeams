import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WinterFellComponent } from './winter-fell/winter-fell.component';
import { NorthOfTheWallComponent } from './north-of-the-wall/north-of-the-wall.component';
import { FormsModule } from '@angular/forms';
import { LandOFAlwaysWinterComponent } from './land-ofalways-winter/land-ofalways-winter.component';
import {TeamsComponent} from "./teamsComponent/teamsComponent.component";
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    WinterFellComponent,
    NorthOfTheWallComponent,
    LandOFAlwaysWinterComponent,
    TeamsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
