import { AfterContentInit, AfterViewInit, Component, ContentChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-contentchildview',
  templateUrl: './contentchildview.component.html',
  styleUrls: ['./contentchildview.component.scss']
})
export class ContentchildviewComponent implements AfterContentInit {
  ngAfterContentInit(): void {
    console.log(this.contentChildRef.nativeElement);
    this.contentChildRef.nativeElement.style.background='lightgray'
  }
  @ContentChild('contentChildRef') contentChildRef!:ElementRef;

}
