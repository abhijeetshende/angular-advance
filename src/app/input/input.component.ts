import { Component } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent {
  user: string = '';
  users: string[] = [];
  addUserToChild(str:string){
    this.users.push(str);
  }
}
