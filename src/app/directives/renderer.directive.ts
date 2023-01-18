import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appRenderer]'
})
export class RendererDirective implements OnInit {
  constructor(private elem: ElementRef,private renderer:Renderer2) {
    console.log('highlight directive3 init');
  }
  ngOnInit(): void {
    // this.elem.nativeElement.style.background = 'lightpink';
    this.renderer.addClass(this.elem.nativeElement,'bg-primary')
  }
}
