import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from "@angular/core";

import { CustomPreloadingStrategy } from "./custom.preloading-strategy";

export const appRoutes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        loadChildren: './home.module#HomeModule',
        data: {
            preload: true
        }
    }
];

export const appRouting: ModuleWithProviders
    = RouterModule.forRoot(appRoutes, { preloadingStrategy: CustomPreloadingStrategy });