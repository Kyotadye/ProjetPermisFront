import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-all-actions',
  templateUrl: './all-actions.component.html',
  styleUrls: ['./all-actions.component.scss'],
})
export class AllActionsComponent {
  actions: any;
  missions: any;

  constructor(private apiService: ApiService, private router: Router) {}

  ngOnInit(): void {
    this.getAllActions();
  }

  getAllActions(): void {
    this.apiService.getAllActions().subscribe(
      (datas) => {
        console.log(datas);
        this.actions = datas; // Faites quelque chose avec les données
      },
      (error) => {
        console.error(error);
      }
    );
  }

  delete(id: number): void {
    this.apiService.deleteAction(id).subscribe(
      (datas) => {
        console.log('Suppression réussie');
        this.apiService.deleteAction(id).subscribe(
          (datas) => {
            console.log('Suppression réussie');
            this.refreshPage();
          },
          (error) => {
            console.error(error);
          }
        );
      },
      (error) => {
        console.error(error);
      }
    );
  }

  refreshPage() {
    this.getAllActions();
  }

  modify(id: number) {
    this.router.navigate(['/modify-action', id]);
  }

  add() {
    this.router.navigate(['/add-action']);
  }
}
