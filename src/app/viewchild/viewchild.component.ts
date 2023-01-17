import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-viewchild',
  templateUrl: './viewchild.component.html',
  styleUrls: ['./viewchild.component.scss'],
})
export class ViewchildComponent {
  @ViewChild('vc') vc: ElementRef | undefined;
  printVc() {
    console.log(this.vc?.nativeElement.value);
    
  }
}
