import { Injectable } from '@angular/core';
import { Commentry } from '../models/commentry';

@Injectable({
  providedIn: 'root'
})
export class CommentryService {

  comm: Array<Commentry>=[];
  constructor() { }

  commentry(balls:any,runs:any,overs:any)
  {
    console.log("dfdsfjd");

    this.comm.push(new Commentry(balls,runs,overs));
    console.log(this.comm);
    console.log("dfjd");
  }
}
