import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: 'appHighlight2'
})
export class Highlight2Directive implements OnInit{
  constructor(private elem: ElementRef) {
    console.log('highlight directive2 init');
  }
  ngOnInit(): void {
    this.elem.nativeElement.style.background = 'lightgreen';
  }
}

