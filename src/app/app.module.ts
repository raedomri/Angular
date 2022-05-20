import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { ProduitComponent } from './pages/produit/produit.component';
import { PubliciteComponent } from './pages/publicite/publicite.component';
import { CategorieComponent } from './pages/categorie/categorie.conponent';
import { EventsComponent } from './pages/events/events.component';
import { DatePipe } from '@angular/common'

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    RouterModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AuthLayoutComponent,
   
    ProduitComponent,
    PubliciteComponent,
    CategorieComponent,
    EventsComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
