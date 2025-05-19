import { Component } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {SideMenuHeadersComponent} from '../../components/side-menu/side-menu-headers/side-menu-headers.component';
import {SideMenuOptionsComponent} from '../../components/side-menu/side-menu-options/side-menu-options.component';
import {SideMenuComponent} from '../../components/side-menu/side-menu.component';

@Component({
  selector: 'app-dashboard-page',
  imports: [
    RouterOutlet,
    SideMenuComponent
  ],
  templateUrl: './dashboard-page.component.html',
  styles: ``
})
export default class DashboardPageComponent {

}
