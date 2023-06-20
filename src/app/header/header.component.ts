import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(private router: Router) {}

  isNavbarActive: boolean = false;

  toggleNavbar(): void {
    this.isNavbarActive = !this.isNavbarActive;
  }

  navigateTo(page: string): void {
    this.router.navigate([`/${page}`]);
  }
}
