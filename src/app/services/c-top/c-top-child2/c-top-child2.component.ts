import { Component } from '@angular/core';
import { SamelevelService } from '../service/samelevel.service';

@Component({
  selector: 'app-c-top-child2',
  templateUrl: './c-top-child2.component.html',
  styleUrls: ['./c-top-child2.component.scss'],
  providers:[SamelevelService]   /// this creates a new instance of service and all the child component will be sharing this service
})
export class CTopChild2Component {
  dataToParent:string='';
  constructor(private sameleveService: SamelevelService) {}
  child2LevelString: string = '';
  Add() {
    this.sameleveService.addData(this.child2LevelString);
    this.sameleveService.getData();
  }
  sendDataToParent(){
    console.log(this.dataToParent);
    
    this.sameleveService.emitShareData(this.dataToParent);
  }
}
