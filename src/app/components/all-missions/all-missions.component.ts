import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-missions',
  templateUrl: './all-missions.component.html',
  styleUrls: ['./all-missions.component.scss'],
})
export class AllMissionsComponent {
  actions: any;
  missions: any;

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

  delete(id: number): void {
    this.apiService.deleteMission(id).subscribe(
      (datas) => {
        console.log('Suppression réussie');
        this.apiService.deleteMission(id).subscribe(
          (datas) => {
            console.log('Suppression réussie');
            this.refreshPage();
          },
          (error) => {
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
    this.getAllMissions();
  }

  modify(id: number) {
    this.router.navigate(['/modify-mission', id]);
  }

  add() {
    this.router.navigate(['/add-mission']);
  }
}
