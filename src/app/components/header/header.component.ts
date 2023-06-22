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
  isNavbarActive: boolean = false;
  userid: string = '';

  constructor(private router: Router) {}

  ngOnInit() {
    this.token = localStorage.getItem('token') || '';
    this.logged = this.token.length > 0;
    this.userid = localStorage.getItem('id') || '';
    console.log(this.userid);
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
