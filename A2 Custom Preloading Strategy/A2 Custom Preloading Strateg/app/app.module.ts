import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { HomeModule } from "./home.module";

import { CustomPreloadingStrategy } from "./custom.preloading-strategy";
import { appRouting } from './app.route';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HomeModule, appRouting
  ],
  providers: [CustomPreloadingStrategy],
  bootstrap: [AppComponent]
})

export class AppModule { }
