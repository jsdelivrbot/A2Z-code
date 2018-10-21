import { NgModule } from '@angular/core';

import {
  MatButtonModule, MatButtonToggleModule, MatCheckboxModule,
  MatDialogModule, MatInputModule, MatRadioModule, MatSelectModule, MatSlideToggleModule,
  MatToolbarModule, MatAutocompleteModule, MatTooltipModule, MatTabsModule, MatMenuModule, MatProgressBarModule, MatCardModule,
  MatSidenavModule, MatDatepickerModule, MatNativeDateModule, MatProgressSpinnerModule, MatGridListModule
} from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule, MatButtonToggleModule, MatCheckboxModule,
    MatDialogModule, MatInputModule, MatRadioModule, MatSelectModule, MatSlideToggleModule,
    MatToolbarModule, MatAutocompleteModule, MatTooltipModule, MatTabsModule, MatMenuModule, MatProgressBarModule, MatCardModule,
    MatSidenavModule, MatDatepickerModule, MatNativeDateModule, MatProgressSpinnerModule, MatGridListModule
  ],
  exports: [

    MatButtonModule, MatButtonToggleModule, MatCheckboxModule,
    MatDialogModule, MatInputModule, MatRadioModule, MatSelectModule, MatSlideToggleModule,
    MatToolbarModule, MatAutocompleteModule, MatTooltipModule, MatTabsModule, MatMenuModule, MatProgressBarModule, MatCardModule,
    MatSidenavModule, MatDatepickerModule, MatNativeDateModule, MatProgressSpinnerModule, MatGridListModule
  ],
  declarations: []
})
export class CustomMaterialModule {
  // constructor(private adapter: DateAdapter<Date>) {
  //   adapter.setLocale('en-in');
  // }
}
