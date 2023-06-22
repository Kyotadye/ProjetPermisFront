import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  formData: any = {}; // Vous pouvez remplacer 'any' par le type spécifique si vous le connaissez

  constructor(private authService: AuthService, private router: Router) {}

  submitForm() {
    // Traitez les données soumises ici, par exemple :
    this.authService.login(this.formData).subscribe((datas) => {
      this.router.navigate(['/']).then(() => {
        window.location.reload();
      });
    });
  }
}
