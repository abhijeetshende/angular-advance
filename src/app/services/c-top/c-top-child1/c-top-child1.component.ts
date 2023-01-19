import { Component } from '@angular/core';
import { SamelevelService } from '../service/samelevel.service';

@Component({
  selector: 'app-c-top-child1',
  templateUrl: './c-top-child1.component.html',
  styleUrls: ['./c-top-child1.component.scss'],
})
export class CTopChild1Component {
  constructor(private sameleveService: SamelevelService) {}
  child1LevelString: string = '';
  Add() {
    this.sameleveService.addData(this.child1LevelString);
    this.sameleveService.getData();
  }
}
