import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { PrincipalComponent } from './principal/principal.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

export const routes: Routes = [
    { path: '', component: PrincipalComponent },
    { path: '', redirectTo: '/', pathMatch: 'full' },
    { path: 'about', component: AboutComponent },
    { path: 'portfolio', component: PortfolioComponent }
];
