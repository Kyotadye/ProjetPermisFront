import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-inscription',
  templateUrl: './add-inscription.component.html',
  styleUrls: ['./add-inscription.component.scss'],
})
export class AddInscriptionComponent {
  missions: any;
  selectedId!: number; // Variable pour stocker l'ID sélectionné lors de la soumission

  constructor(private apiService: ApiService, private router: Router) {}

  ngOnInit(): void {
    this.getAllMissions();
  }

  getAllMissions(): void {
    this.apiService.getAllMissions().subscribe(
      (datas) => {
        console.log(datas);
        this.missions = datas; // Faites quelque chose avec les données
      },
      (error) => {
        console.error(error);
      }
    );
  }

  submitForm() {
    // Utilisez selectedId pour obtenir l'ID sélectionné lors de la soumission du formulaire
    console.log(this.selectedId);
    this.apiService.ajoutInscription(this.selectedId).subscribe(
      (datas) => {
        this.router.navigate(['/all-inscriptions']);
      },
      (error) => {
        console.error(error);
        this.router.navigate(['/all-inscriptions']);
      }
    );
    // Autres opérations de soumission du formulaire...
  }
}
