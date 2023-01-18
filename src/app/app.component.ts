import { Component } from '@angular/core';

interface sidebarLinks{
  linkname: string;
  routerLink: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-learning-advance';
  tutorialLinks: sidebarLinks[] = [
    {'linkname':'Input Output','routerLink':'input'},
    {'linkname':'Localreference','routerLink':'localreference'},
    {'linkname':'ViewChild','routerLink':'viewchild'},
    {'linkname':'ngContent','routerLink':'ngcontent'},
    {'linkname':'LifecycleHooks','routerLink':'lifecyclehooks'},
    {'linkname':'ContentChild','routerLink':'contentChild'},
    {'linkname':'Directive','routerLink':'directive'},
    {'linkname':'hostListener','routerLink':'hostlistener'},
    {'linkname':'hostBinding','routerLink':'hostBinding'},
    {'linkname':'InputToDirective','routerLink':'directiveinput'},
  ];
}
