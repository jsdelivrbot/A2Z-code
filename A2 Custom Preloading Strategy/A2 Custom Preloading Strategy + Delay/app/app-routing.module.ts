import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent }  from './page-not-found.component';
import { CustomPreloadingStrategy }  from './custom-preloading-strategy';

const routes: Routes = [
    {
	   path: 'country',
       loadChildren: 'app/country/country.module#CountryModule',
       data: { preload: true }
    },
    {
	   path: 'person',
       loadChildren: 'app/person/person.module#PersonModule',
       data: { preload: true }
    },		
    {
	   path: 'address',
       loadChildren: 'app/address/address.module#AddressModule'
    },	
    {
	    path: '',
	    redirectTo: '',
	    pathMatch: 'full'
    },
    {
	    path: '**',
	    component: PageNotFoundComponent 
    }	
];

@NgModule({
  imports: [ 
      RouterModule.forRoot(routes,
      {
        preloadingStrategy: CustomPreloadingStrategy
      }) 
  ],
  exports: [ 
      RouterModule 
  ],
  providers: [ CustomPreloadingStrategy ]
})
export class AppRoutingModule { } 