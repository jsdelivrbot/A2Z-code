import { Component } from '@angular/core';

import { ToastService } from './toast';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
})
export class AppComponent  {
  private count = 1;

  constructor(private toastService: ToastService) { }

  showToast() {
    this.toastService.show({
      text: `Toast message ${this.count}`,
      type: 'success',
    });

    this.count += 1;
  }
}
