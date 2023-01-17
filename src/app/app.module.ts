import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BaseViewComponent } from './base-view/base-view.component';
import { InputComponent } from './input/input.component';
import { UsersComponent } from './input/users/users.component';

@NgModule({
  declarations: [
    AppComponent,
    BaseViewComponent,
    InputComponent,
    UsersComponent
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
