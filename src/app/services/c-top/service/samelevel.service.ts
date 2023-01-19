import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SamelevelService {
  constructor() {
    console.log('Sample Level Service init');
    
  }
  data: string[] = ['initdata', 'initdata2'];
  sharedServiceData = new EventEmitter<string>
  getData() {
    console.log(this.data);
  }
  addData(str: string) {
    this.data.push(str);
  }

  subscribeToShareData(){
    return this.sharedServiceData;
  }

  emitShareData(str:string){
    this.sharedServiceData.emit(str);
  }

}
