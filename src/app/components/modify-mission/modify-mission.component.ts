import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-modify-mission',
  templateUrl: './modify-mission.component.html',
  styleUrls: ['./modify-mission.component.scss'],
})
export class ModifyMissionComponent {
  id: number | any;
  data: any;
  actions: any;
  actionsglobal: any;
  selectedId!: number; // Variable pour stocker l'ID sélectionné lors de la soumission

  constructor(
    private route: ActivatedRoute,
    private apiservice: ApiService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = params['id']; // Récupération de l'id depuis les paramètres
      this.apiservice.getMissionById(this.id).subscribe((datas) => {
        console.log(datas);
        this.data = datas; // Faites quelque chose avec les données
      });
    });
    this.getActionByMissionId();
    this.getActionGlobal();
  }

  getActionGlobal(): void {
    this.apiservice.getAllActions().subscribe((datas) => {
      console.log(datas);
      this.actionsglobal = datas; // Faites quelque chose avec les données
    });
  }

  modify(): void {
    this.apiservice.ajoutActionAMission(this.id, this.selectedId).subscribe(
      (datas) => {
        this.apiservice.modifyMission(this.id, this.data).subscribe((datas) => {
          this.refresh();
        });
      },
      (error) => {
        this.apiservice.modifyMission(this.id, this.data).subscribe((datas) => {
          this.refresh();
        });
      }
    );
  }

  getActionByMissionId(): void {
    this.apiservice.getActionByMissionId(this.id).subscribe((datas) => {
      console.log(datas);
      this.actions = datas; // Faites quelque chose avec les données
    });
  }

  refresh() {
    this.router.navigate(['/all-missions']);
  }

  delete(idAction: number) {
    this.apiservice
      .supprimerLienActionMission(this.id, idAction)
      .subscribe((datas) => {
        this.getActionByMissionId();
      });
  }
}
