import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent {
  @Input() users: string[] = [];
  @Output() dummyevent = new EventEmitter<string>();
  generatEvent(){
    this.dummyevent.emit('hello event')
  }
  listenOutputEvent(e:any){
    console.log('receiving event in user comp',e);
    
  }
}
