import { Component } from '@angular/core';

@Component({
  selector: 'app-localreference',
  templateUrl: './localreference.component.html',
  styleUrls: ['./localreference.component.scss']
})
export class LocalreferenceComponent {


  printLocalRef(str:string){
    alert(str);
  }
}
