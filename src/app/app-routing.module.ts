import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseViewComponent } from './base-view/base-view.component';
import { InputComponent } from './input/input.component';

const routes: Routes = [
  {
    path:'input',
    component:InputComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
