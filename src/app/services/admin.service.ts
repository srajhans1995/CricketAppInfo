import { Injectable } from '@angular/core';
import {Admin} from 'src/app/models/admin';
@Injectable({
  providedIn: 'root'
})
export class AdminService {
  // scorecard=[ 
  //   new Admin('India','Pak','India',10),
  //   new Admin('pak','India','pak',20),
  //   new Admin('aust','nz','nz',20)
  // ];
  teams: Array<Admin> = [];
  constructor() { }

  scorecard(team1:string,team2:string,toss:string,decision:string,overs:number){
    this.teams.push(new Admin(team1,team2,toss,decision,overs));
  }
} 



