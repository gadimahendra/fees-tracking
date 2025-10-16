import { Component } from '@angular/core';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { DashboardComponent } from '../components/dashboard/dashboard.component';

@Component({
  selector: 'app-layout',
  imports: [NavbarComponent, DashboardComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
})
export class LayoutComponent {}
