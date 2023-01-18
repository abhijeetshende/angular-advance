import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appInputdirective]',
})
export class InputdirectiveDirective {
  @Input() defaultcolor:string='grey';
  @Input() highlightedcolor:string='';
  @HostBinding('style.background') background!: string;
  constructor() {}
  @HostListener('click') onclick() {
    this.background = this.highlightedcolor;
  }
}
