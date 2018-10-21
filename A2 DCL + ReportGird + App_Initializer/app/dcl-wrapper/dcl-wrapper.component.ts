import {
  Component, OnInit, ViewChild, Input, Output, AfterViewInit, ViewContainerRef,
  ComponentFactory, ComponentRef, ComponentFactoryResolver, NgModuleFactory, SystemJsNgModuleLoader, Injector, Type
} from '@angular/core';
import { UIEntity } from '../dialog/uiEntity.model';
import { EventEmitter } from 'protractor';

@Component({
  selector: 'dcl-wrapper',
  templateUrl: './dcl-wrapper.component.html',
  styleUrls: ['./dcl-wrapper.component.css']
})
export class DclWrapperComponent implements OnInit {

  @ViewChild('target', { read: ViewContainerRef }) target: ViewContainerRef;
  @Input() uiEntity: UIEntity;
  @Output() activate = new EventEmitter();
  @Output() closeDialog = new EventEmitter();

  cmpRef: ComponentRef<any>;

  private isViewInitialized: boolean = false;

  constructor(private componentFactoryResolver: ComponentFactoryResolver,
    private loader: SystemJsNgModuleLoader,
    private inj: Injector) { }

  ngOnInit() {
  }

  ngOnChanges(): void {
    this.updateComponent();
  }

  ngAfterViewInit() {
    this.isViewInitialized = true;
    this.updateComponent();
  }

  ngOnDestroy(): void {
    if (this.cmpRef) {
      this.cmpRef.destroy();
    }
  }

  updateComponent() {
    if (!this.isViewInitialized) {
      return;
    }

    if (this.cmpRef) {
      this.cmpRef.destroy();
    }

    if (this.uiEntity != null && this.uiEntity != undefined) {
      if (this.uiEntity.component != undefined) {
        //this resolves the component directly
        let factory = this.componentFactoryResolver.resolveComponentFactory(this.uiEntity.component);
        this.cmpRef = this.target.createComponent(factory);

        this.cmpRef.instance.context = this.uiEntity;
        this.cmpRef.changeDetectorRef.detectChanges();
        this.activate.emit(this.cmpRef.instance);
        if (this.cmpRef.instance.closeDialog != undefined) {
          this.cmpRef.instance.closeDialog.subscribe(val => { this.closeDialog.emit(val); })
        }

      } else {
        //this resolves module first and then component
        this.loader.load(this.uiEntity.modulePath).
          then((moduleFactory: NgModuleFactory<any>) => {
            const moduleRef = moduleFactory.create(this.inj);
            const component = moduleRef.instance.routes.get(this.uiEntity.menuId);

            const compFactory = moduleRef.componentFactoryResolver.resolveComponentFactory(component);
            
            this.cmpRef = this.target.createComponent(compFactory);
            
            this.cmpRef.instance.context = this.uiEntity;
            this.cmpRef.changeDetectorRef.detectChanges();
            this.activate.emit(this.cmpRef.instance);
            if (this.cmpRef.instance.closeDialog != undefined) {
              this.cmpRef.instance.closeDialog.subscribe(val => { this.closeDialog.emit(val); })
            }
          });
      }
    }
  }
}

