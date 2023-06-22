import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-mission',
  templateUrl: './add-mission.component.html',
  styleUrls: ['./add-mission.component.scss'],
})
export class AddMissionComponent {
  formData: any = {}; // Vous pouvez remplacer 'any' par le type spécifique si vous le connaissez

  constructor(private apiService: ApiService, private router: Router) {}

  submitForm() {
    // Traitez les données soumises ici, par exemple :
    console.log(this.formData);
    this.apiService.ajoutMission(this.formData).subscribe((datas) => {
      this.router.navigate(['/all-missions']);
    });
  }
}
