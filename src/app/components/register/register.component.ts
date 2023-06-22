import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  formData: any = {}; // Vous pouvez remplacer 'any' par le type spécifique si vous le connaissez

  constructor(private authService: AuthService, private router: Router) {}

  submitForm() {
    var formResponse = {
      nomUtil: this.formData.nomUtil,
      motpasse: this.formData.motpasse,
      salt: '',
      role: 'admin',
      email: this.formData.email,
      surname: this.formData.surname,
      forename: this.formData.forename,
    };
    // Traitez les données soumises ici, par exemple :
    this.authService.register(formResponse).subscribe((datas) => {
      this.router.navigate(['/']).then(() => {
        window.location.reload();
      });
    });
  }
}
