import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BriefcaseComponent } from './pages/briefcase/briefcase.component';
import { AboutComponent } from './pages/about/about.component';
import { PortafolioItemComponent } from './pages/portafolio-item/portafolio-item.component';
import { SearchComponent } from './pages/search/search.component';

const appRoutes: Routes = [
    { path: 'home', component: BriefcaseComponent },
    { path: 'about', component: AboutComponent },
    { path: 'item/:id', component: PortafolioItemComponent },
    { path: 'search/:termino', component: SearchComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
    imports: [
        RouterModule.forRoot( appRoutes, { useHash: true } )
    ],
    exports: [
        RouterModule
    ]
  })

export class AppRoutingModule { }
