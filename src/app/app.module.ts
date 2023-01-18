import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BaseViewComponent } from './base-view/base-view.component';
import { InputComponent } from './input/input.component';
import { UsersComponent } from './input/users/users.component';
import { OutputListenerComponent } from './input/output-listener/output-listener.component';
import { LocalreferenceComponent } from './localreference/localreference.component';
import { ViewchildComponent } from './viewchild/viewchild.component';
import { NgcontentComponent } from './ngcontent/ngcontent.component';
import { NgcontentChildComponent } from './ngcontent/ngcontent-child/ngcontent-child.component';
import { LifecyclehooksComponent } from './lifecyclehooks/lifecyclehooks.component';
import { ChildComponent } from './lifecyclehooks/child/child.component';

@NgModule({
  declarations: [
    AppComponent,
    BaseViewComponent,
    InputComponent,
    UsersComponent,
    OutputListenerComponent,
    LocalreferenceComponent,
    ViewchildComponent,
    NgcontentComponent,
    NgcontentChildComponent,
    LifecyclehooksComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
