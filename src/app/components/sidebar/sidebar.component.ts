import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//import { BoutiqueListComponent } from '../../pages/boutique-list/boutique-list.component';

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard', icon: 'ni-tv-2 text-primary', class: '' },
    { path: '/boutiques', title: 'Boutiques', icon: 'ni-shop text-red', class: '' },
    { path: '/rayons', title: 'Rayons',  icon:'ni-bullet-list-67 text-red', class: '' },
    { path: '/stocks', title: 'Stock',  icon:'ni-archive-2 text-info', class: '' },
    { path: '/fournisseurs', title: 'Fournisseur', icon:'ni-badge text-primary', class: '' },
    { path: '/produit' ,title: 'Produits' , icon:'ni-bullet-list-67 text-blue' , class:''},
    { path: '/publicite' ,title: 'Publicites', icon:'ni-shop text-red', class:''},
    { path:'/categorie', title: 'Categorie', icon:'ni-shop text-red', class:''},
    { path: '/events', title: 'Events' , icon:'ni-shop text-red', class:''}
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public menuItems: any[];
  public isCollapsed = true;

  constructor(private router: Router) { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
   });
  }
}
