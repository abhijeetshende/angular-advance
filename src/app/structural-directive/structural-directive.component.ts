import { Component, OnInit } from '@angular/core';
import { Subscription, timer } from 'rxjs';

@Component({
  selector: 'app-structural-directive',
  templateUrl: './structural-directive.component.html',
  styleUrls: ['./structural-directive.component.scss'],
})
export class StructuralDirectiveComponent implements OnInit {
  intervalSubscription: any;

  ngOnInit(): void {
    this.intervalSubscription = setInterval(()=>{
      console.log('updating structural directive');
      
      this.isVisible = !this.isVisible;
    },1000)
  }
  isVisible: boolean = false;

  ngOnDestroy(){
    clearInterval(this.intervalSubscription)
  }
}
