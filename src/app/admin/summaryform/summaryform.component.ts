import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import { PlayerService } from 'src/app/services/player.service';
import { AdminService } from 'src/app/services/admin.service';
import { Admin } from 'src/app/models/admin';
import { CommentryService } from 'src/app/services/commentry.service';

@Component({
  selector: 'app-summaryform',
  templateUrl: './summaryform.component.html',
  styleUrls: ['./summaryform.component.css']
})
export class SummaryformComponent implements OnInit {
  balls = 1;
  wicketType;
  catchBy;
  numovers = 0;
  numballs=1;
  runs;
  w1;
  c1;
  array = [1, 2, 3, 4, 5, 6];

  showBowler: boolean = true;
  showWicketType: boolean = false;
  showCatchBy: boolean = false;
  adminService: AdminService;
  
  playerService: PlayerService;
  playerlist1;
  playerlist2;
  @ViewChild('overs') oversInTs:ElementRef;
  @ViewChild('runs') runsInTs:ElementRef;
  @ViewChild('balls') ballsInTs:ElementRef;
  @ViewChild('wicket') wicketInFs:ElementRef;
  @ViewChild('catch') catchInFs:ElementRef;

  constructor(
    playerService: PlayerService,
    adminService: AdminService,
    private commen:CommentryService,
    public player1: PlayerService) {
    this.adminService = adminService;
    this.playerlist1 = player1.team11;
    this.playerlist2 = player1.team22;
  }

  private txtOver:boolean=true;
  private txtBalls:boolean=true;
  ngOnInit() {
  }

  onWicketClick()
  {
    this.w1=((<HTMLInputElement>this.ballsInTs.nativeElement).value)
  }


  onSubmitClicked() {
    this.numballs++;
    if (this.numballs > 6) {
      this.numballs=1;
      //this.showBowler = true;
      this.numovers++;
      this.showBowler = true;

    }
    else if (this.numballs > 0) {
      for (let numballs = 0; numballs < this.array.length; numballs++) {
        this.showBowler = false;
        console.log(this.array[numballs]);
      }

    } else {
      this.showBowler = false;
    }
    //this.overs++;


    this.showWicketType = false;

    this.commen.commentry((<HTMLInputElement>this.ballsInTs.nativeElement).value,
    (<HTMLInputElement>this.runsInTs.nativeElement).value,(<HTMLInputElement>this.oversInTs.nativeElement).value)


    console.log("added");


  }



}