import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-output-listener',
  templateUrl: './output-listener.component.html',
  styleUrls: ['./output-listener.component.scss']
})
export class OutputListenerComponent {
  @Output() outputUser = new EventEmitter<string>();

  sendOutput(str: string) {
    console.log('sending event ', str);

    this.outputUser.emit(str);
  }
}
