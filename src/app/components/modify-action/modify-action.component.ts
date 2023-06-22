import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modify-action',
  templateUrl: './modify-action.component.html',
  styleUrls: ['./modify-action.component.scss'],
})
export class ModifyActionComponent {
  id: number | any;
  data: any;
  missions: any;

  constructor(
    private route: ActivatedRoute,
    private apiservice: ApiService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = params['id']; // Récupération de l'id depuis les paramètres
      this.apiservice.getActionById(this.id).subscribe((datas) => {
        console.log(datas);
        this.data = datas; // Faites quelque chose avec les données
      });
    });
    this.getMissionByActionId();
  }

  modify(): void {
    this.apiservice
      .modifyAction(this.id, this.data)
      .subscribe((datas) => this.refresh());
  }

  getMissionByActionId(): void {
    this.apiservice.getMissionByActionId(this.id).subscribe((datas) => {
      console.log(datas);
      this.missions = datas; // Faites quelque chose avec les données
    });
  }

  refresh() {
    this.router.navigate(['/all-actions']);
  }

  delete(idMission: number) {
    this.apiservice
      .supprimerLienActionMission(idMission, this.id)
      .subscribe((datas) => {
        this.getMissionByActionId();
      });
  }
}
