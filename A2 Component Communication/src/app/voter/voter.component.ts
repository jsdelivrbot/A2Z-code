import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-voter',
  templateUrl: './voter.component.html',
  styleUrls: ['./voter.component.css']
})

//here voter is an child component and vote-taker is a parent component
export class VoterComponent implements OnInit {

  @Input() name: string;
  @Output() onVoted = new EventEmitter<boolean>();
  voted = false;

  vote(agreed: boolean) {
    console.log(agreed);
    this.onVoted.emit(agreed);
    this.voted = true;
  }
  
  ngOnInit(){

  }

}
