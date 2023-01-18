import { Component } from '@angular/core';

@Component({
  selector: 'app-lifecyclehooks',
  templateUrl: './lifecyclehooks.component.html',
  styleUrls: ['./lifecyclehooks.component.scss']
})
export class LifecyclehooksComponent {
  lifecycleEvent:string[] = ['ngonChanges','constructor','ngonInit']

  Add(str:string){
    console.log(str);
    
  }

}
