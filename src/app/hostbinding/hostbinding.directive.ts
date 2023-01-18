import { Directive, HostBinding,HostListener } from '@angular/core';

@Directive({
  selector: '[appHostbinding]'
})
export class HostbindingDirective {
@HostBinding('style.background') background!:string;
  constructor() { }
@HostListener('click') onclick(){
  this.background = 'lightpink';
}
}
