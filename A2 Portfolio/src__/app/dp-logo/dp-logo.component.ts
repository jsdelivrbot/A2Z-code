import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-dp-logo',
  templateUrl: './dp-logo.component.html',
  styleUrls: ['./dp-logo.component.scss']
})

export class DpLogoComponent implements OnInit, OnChanges {

  imgStyle: {};
  logoStyles: {};

  @Input('height') height: string;
  @Input('width') width: string;
  @Input('borderWidth') borderWidth: string;

  constructor() { }

  ngOnInit() {
    this.logoStyles = {
      height: this.height,
      width: this.width
    };
    this.imgStyle = {
      borderWidth: this.borderWidth
    };
    console.log("h " + this.height);
    console.log("w " + this.width);
    console.log("bw " + this.borderWidth);
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.ngOnInit();
  }
}
