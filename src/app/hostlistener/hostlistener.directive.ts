import {
  Directive,
  ElementRef,
  HostListener,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appHostlistener]',
})
export class HostlistenerDirective implements OnInit {
  constructor(private elem: ElementRef, private renderer: Renderer2) {
    console.log('highlight directive3 init');
  }
  ngOnInit(): void {}
  @HostListener('click') onclick(event: Event) {
    console.log(this.elem, 'clicked');
  }

  @HostListener('mouseenter') mouseenter(event: Event) {
    console.log(this.elem, 'enter');
  }

  @HostListener('mouseleave') mouseleave(event: Event) {
    console.log(this.elem, 'leave');
  }
}
