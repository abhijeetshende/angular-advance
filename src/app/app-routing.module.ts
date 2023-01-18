import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseViewComponent } from './base-view/base-view.component';
import { ContentchildComponent } from './contentchild/contentchild.component';
import { DirectiveViewComponent } from './directive-view/directive-view.component';
import { InputComponent } from './input/input.component';
import { LifecyclehooksComponent } from './lifecyclehooks/lifecyclehooks.component';
import { LocalreferenceComponent } from './localreference/localreference.component';
import { NgcontentComponent } from './ngcontent/ngcontent.component';
import { ViewchildComponent } from './viewchild/viewchild.component';

const routes: Routes = [
  {
    path: 'input',
    component: InputComponent,
  },
  { path: 'localreference', component: LocalreferenceComponent },
  { path: 'viewchild', component: ViewchildComponent },
  { path: 'ngcontent', component: NgcontentComponent },
  { path: 'lifecyclehooks', component: LifecyclehooksComponent },
  { path: 'contentChild', component: ContentchildComponent },
  {path:'directive','component':DirectiveViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
