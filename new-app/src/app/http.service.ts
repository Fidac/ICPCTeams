import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

export class Team{
  constructor(
    public id:string,
    public name:string,
    public rank:string
  ) {}

}



@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }
  myMethod(){
     return this.http.get('https://anapioficeandfire.com/api/characters')}
  team(){
     return this.http.get('http://localhost:8080/team')
    //return this.http.get<Team[]>('http://localhost:8080/team');
   //return console.log("The master will erase the world and all memory of it.")
   //return this.http.get('https://api.openbrewerydb.org/breweries')

  }
}
