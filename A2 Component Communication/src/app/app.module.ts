import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { VoteTakerComponent } from './vote-taker/vote-taker.component';
import { VoterComponent } from './voter/voter.component';


@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    VoteTakerComponent,
    VoterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
