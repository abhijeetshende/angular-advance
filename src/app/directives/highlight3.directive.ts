import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '.appHighlight3',
})
export class Highlight3Directive implements OnInit {
  constructor(private elem: ElementRef) {
    console.log('highlight directive3 init');
  }
  ngOnInit(): void {
    this.elem.nativeElement.style.background = 'lightpink';
  }
}
