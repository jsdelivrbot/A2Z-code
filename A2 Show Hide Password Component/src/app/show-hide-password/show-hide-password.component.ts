import { Component, Input, OnInit, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'show-hide-password',
  templateUrl: './show-hide-password.component.html',
  styleUrls: ['./show-hide-password.component.css']
})
export class ShowHidePasswordComponent implements OnInit {

 
  public input: any;
  public isHidden: boolean;

  constructor(private elem: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    this.input = this.elem.nativeElement.querySelector('input');
    if (this.input) {
    
      this.isHidden = this.input.type === 'password';
      
    } else {
      throw new Error(`No input element found. Please read the docs!`);
    }
  }

  public toggleShow($event: any): void {
    this.isHidden = !this.isHidden;
    this.renderer.setAttribute(this.input, 'type', this.isHidden ? 'password' : 'text');
  }


}
