export class UIEntity {
    name: string;
    menuId: string;
    uiContainderId: string;
    compRef: any = null;
    component: any = null;
    browserURL: string;
    modulePath: string;
    params: string;
    isPopUp: boolean = false;
    width: string;
    height: string;
}

export class UIContainer {
    id: string;
    containerType: string;
    compRef: any;
    modelContxt: any
}