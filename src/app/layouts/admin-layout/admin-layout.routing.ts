import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';

import { ProduitComponent } from 'src/app/pages/produit/produit.component';
import { PubliciteComponent } from 'src/app/pages/publicite/publicite.component';
import { CategorieComponent } from 'src/app/pages/categorie/categorie.conponent';
import { EventsComponent } from 'src/app/pages/events/events.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'tables',         component: TablesComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps', component: MapsComponent },
    
    { path: 'produit' , component: ProduitComponent},
    { path: 'publicite', component: PubliciteComponent},
    { path: 'categorie', component: CategorieComponent},
    { path: 'events' , component: EventsComponent}
];
