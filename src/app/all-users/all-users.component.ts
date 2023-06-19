import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.scss'],
})
export class AllUsersComponent {
  data: any;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getAllUsers().subscribe(
      (datas) => {
        console.log(datas);
        this.data = datas; // Faites quelque chose avec les données
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
