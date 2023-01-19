import { Component, OnInit } from '@angular/core';
import { SamelevelService } from './service/samelevel.service';

@Component({
  selector: 'app-c-top',
  templateUrl: './c-top.component.html',
  styleUrls: ['./c-top.component.scss'],
})
export class CTopComponent implements OnInit {
  constructor(private sameleveService: SamelevelService) {}
  ngOnInit(): void {
    this.sameleveService.subscribeToShareData().subscribe((data) => {
      this.EmittedData = data;
    });
  }
  topLevelString: string = '';
  Add() {
    this.sameleveService.addData(this.topLevelString);
    this.sameleveService.getData();
  }

  EmittedData: string = '';
}
