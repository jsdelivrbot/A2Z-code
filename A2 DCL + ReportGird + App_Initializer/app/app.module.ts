import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';

import { AppComponent } from './app.component';
import { ReportgridComponent } from './reportgrid/reportgrid.component';
import { DialogComponent } from './dialog/dialog.component';
import { DclWrapperComponent } from './dcl-wrapper/dcl-wrapper.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConfigLoader, GlobalService } from './global.service';
import { HttpClientModule } from '@angular/common/http';
import { CustomMaterialModule } from './custom-material/custom-material.module';

@NgModule({
  declarations: [
    AppComponent,
    ReportgridComponent,
    DialogComponent,
    DclWrapperComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule, HttpClientModule, CustomMaterialModule
  ],
  providers: [{
    provide: APP_INITIALIZER,
    useFactory: ConfigLoader,
    deps: [GlobalService], multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
