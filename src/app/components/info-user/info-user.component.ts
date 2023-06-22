import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-info-user',
  templateUrl: './info-user.component.html',
  styleUrls: ['./info-user.component.scss'],
})
export class InfoUserComponent {
  id: number | any;
  data: any;
  motpassenew: string = '';
  motpassenewConfirmation: string = '';
  showErrorMessage: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private apiservice: ApiService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = params['id']; // Récupération de l'id depuis les paramètres
      this.apiservice.getUserById(this.id).subscribe((datas) => {
        console.log(datas);
        this.data = datas; // Faites quelque chose avec les données
      });
    });
  }

  modify(): void {
    if (this.motpassenew == this.motpassenewConfirmation) {
      this.apiservice
        .modifyPassword(this.id, this.motpassenew)
        .subscribe((datas) => {
          this.refresh();
        });
    } else {
      this.showErrorMessage = true;
    }
  }

  refresh() {
    this.router.navigate(['/']);
  }
}
