import { Injectable, Injector, Inject } from '@angular/core';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal, PortalInjector } from '@angular/cdk/portal';

import { ToastComponent } from './toast.component';
import { ToastData, TOAST_CONFIG_TOKEN, ToastConfig } from './toast-config';
import { ToastRef } from './toast-ref';

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  private lastToast: ToastRef;
  private overlayRef: OverlayRef;

  constructor(
    private overlay: Overlay,
    private parentInjector: Injector,
    @Inject(TOAST_CONFIG_TOKEN) private toastConfig: ToastConfig
  ) { 
    const positionStrategy = this.getPositionStrategy();
    this.overlayRef = this.overlay.create({ positionStrategy });
  }

  show(data: ToastData) {
    const toastRef = new ToastRef(this.overlayRef);
    this.lastToast = toastRef;

    const injector = this.getInjector(data, toastRef, this.parentInjector);
    const toastPortal = new ComponentPortal(ToastComponent, null, injector);

    this.overlayRef.attach(toastPortal);

    return toastRef;
  }

  getPositionStrategy() {
    return this.overlay.position()
      .global()
      .top(this.getPosition())
      .right(this.toastConfig.position.right + 'px');
  }

  getPosition() {
    const lastToastIsVisible = this.lastToast && this.lastToast.isVisible();
    const position = lastToastIsVisible 
      ? this.lastToast.getPosition().bottom
      : this.toastConfig.position.top;

    return position + 'px';
  }

  getInjector(data: ToastData, toastRef: ToastRef, parentInjector: Injector) {
    const tokens = new WeakMap();

    tokens.set(ToastData, data);
    tokens.set(ToastRef, toastRef);

    return new PortalInjector(parentInjector, tokens);
  }
}