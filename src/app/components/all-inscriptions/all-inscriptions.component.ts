import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-inscriptions',
  templateUrl: './all-inscriptions.component.html',
  styleUrls: ['./all-inscriptions.component.scss'],
})
export class AllInscriptionsComponent {
  inscriptions: any;

  constructor(private apiService: ApiService, private router: Router) {}

  ngOnInit(): void {
    this.getAllInscriptions();
  }

  getAllInscriptions(): void {
    this.apiService.getAllInscriptions().subscribe(
      (datas) => {
        console.log(datas);
        this.inscriptions = datas; // Faites quelque chose avec les données
      },
      (error) => {
        console.error(error);
      }
    );
  }

  delete(id: number): void {
    this.apiService.deleteInscription(id).subscribe(
      (datas) => {
        console.log('Suppression réussie');
        this.apiService.deleteInscription(id).subscribe(
          (datas) => {
            console.log('Suppression réussie');
            this.refreshPage();
          },
          (error) => {
            console.error(error);
            this.refreshPage();
          }
        );
      },
      (error) => {
        console.error(error);
      }
    );
  }

  refreshPage() {
    this.getAllInscriptions();
  }

  add() {
    this.router.navigate(['/add-inscription']);
  }
}
