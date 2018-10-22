import { Component, OnInit,Input,SimpleChanges } from '@angular/core';

@Component({
  selector: 'child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }
  
  @Input() nameAsInput:string;
  lastRefreshed: Date;

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.nameAsInput);
  }

  start() {
    console.log("This is child's start");
  }

  stop() {
    console.log("This is child's Stop");
  }
}
