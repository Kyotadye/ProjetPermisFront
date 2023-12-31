import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-action',
  templateUrl: './add-action.component.html',
  styleUrls: ['./add-action.component.scss'],
})
export class AddActionComponent {
  formData: any = {}; // Vous pouvez remplacer 'any' par le type spécifique si vous le connaissez

  constructor(private apiService: ApiService, private router: Router) {}

  submitForm() {
    // Traitez les données soumises ici, par exemple :
    console.log(this.formData);
    this.apiService.ajoutAction(this.formData).subscribe((datas) => {
      this.router.navigate(['/all-actions']);
    });
  }
}
