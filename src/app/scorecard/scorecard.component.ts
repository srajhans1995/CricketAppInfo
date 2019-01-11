import { Component, OnInit } from '@angular/core';
import { ScorecardService } from '../services/scorecard.service';

@Component({
  selector: 'app-scorecard',
  templateUrl: './scorecard.component.html',
  styleUrls: ['./scorecard.component.css']
})
export class ScorecardComponent implements OnInit {
scrcard:ScorecardService;
ss;
  constructor(public scr1:ScorecardService) { 
    this.ss=scr1.scr;
  }

  ngOnInit() {
  }

}