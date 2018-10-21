import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ShowHidePasswordComponent } from './show-hide-password/show-hide-password.component';


@NgModule({
  declarations: [
    AppComponent,
    ShowHidePasswordComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
  
export class AppModule { }
