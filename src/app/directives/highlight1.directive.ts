import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlight1]',
})
export class Highlight1Directive implements OnInit {
  constructor(private elem: ElementRef) {
    console.log('highlight directive1 init');
  }
  ngOnInit(): void {
    this.elem.nativeElement.style.background = 'lightgray';
    console.log();
  }
}


