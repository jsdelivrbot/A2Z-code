import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HomeComponent } from "./home.component";
import { homeRouting } from "./home.route";

@NgModule({
    imports: [CommonModule, homeRouting],
    declarations: [HomeComponent],
    exports: [HomeComponent]
})
export class HomeModule {
    constructor() {
        console.log('Home Module');
    }
}