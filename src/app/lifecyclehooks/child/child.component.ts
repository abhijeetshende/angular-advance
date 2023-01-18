import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent
  implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked,AfterViewInit,AfterViewChecked
{
  @Input() name: string = '';
  @Input() namearray: string[] = ['a', 'b', 'c'];
  constructor() {
    console.log('hello from constructor ');
  }
  ngAfterViewChecked(): void {
    console.log('ngAfterviewChecked');
    
  }
  ngAfterViewInit(): void {
    console.log('ngAfterviewinit');
    
  }
  ngAfterContentChecked(): void {
    console.log('after content checked');
  }
  ngAfterContentInit(): void {
    console.log('after content init');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('hello from ngonchanges', changes);
  }
  ngOnInit(): void {
    console.log('hello from child ng oninit');
  }
  ngDoCheck(): void {
    console.log('do check called');
  }
}
