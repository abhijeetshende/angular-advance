import { Component } from '@angular/core';
import { SamelevelService } from './service/samelevel.service';

@Component({
  selector: 'app-c-top',
  templateUrl: './c-top.component.html',
  styleUrls: ['./c-top.component.scss'],
})
export class CTopComponent {
  constructor(private sameleveService: SamelevelService) {}
  topLevelString: string = '';
  Add() {
    this.sameleveService.addData(this.topLevelString);
    this.sameleveService.getData();
  }
}
