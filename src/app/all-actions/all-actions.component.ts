import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-all-actions',
  templateUrl: './all-actions.component.html',
  styleUrls: ['./all-actions.component.scss'],
})
export class AllActionsComponent {
  actions: any;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
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
}
