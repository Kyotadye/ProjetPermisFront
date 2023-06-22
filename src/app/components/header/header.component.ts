import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  token: string = localStorage.getItem('token') || '';
  logged: boolean = this.token.length > 0;
  constructor(private router: Router) {}
  isNavbarActive: boolean = false;

  ngOnInit() {
    this.token = localStorage.getItem('token') || '';
    this.logged = this.token.length > 0;
  }

  toggleNavbar(): void {
    this.isNavbarActive = !this.isNavbarActive;
  }

  navigateTo(page: string): void {
    this.router.navigate([`/${page}`]);
  }

  logout(): void {
    localStorage.removeItem('token');
    this.router.navigate([`/`]);
    this.logged = false;
  }
}
