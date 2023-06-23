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
  actionsByInscription: { [inscriptionId: number]: any } = {}; // Tableau associatif pour stocker les actions par inscription
  scoreActionsByInscription: {
    [inscriptionId: number]: { [actionId: number]: any };
  } = {}; // Tableau associatif imbriqué pour stocker le score par inscription et action
  booleanActionsByInscription: {
    [inscriptionId: number]: { [actionId: number]: any };
  } = {};

  constructor(private apiService: ApiService, private router: Router) {}

  ngOnInit(): void {
    this.getAllInscriptions();
  }

  getAllInscriptions(): void {
    this.apiService.getAllInscriptions().subscribe(
      (datas) => {
        this.inscriptions = datas; // Faites quelque chose avec les données
        this.loadActionsByInscription(); // Charger les actions par inscription
      },
      (error) => {
        console.error(error);
      }
    );
  }

  loadActionsByInscription(): void {
    for (const inscription of this.inscriptions) {
      this.getActionByInscription(inscription.id);
    }
  }

  getActionByInscription(id: number): void {
    this.apiService.getListActionByInscription(id).subscribe(
      (datas) => {
        this.actionsByInscription[id] = datas; // Stocker les actions correspondantes à l'inscription avec l'id associé
        this.booleanActionsByInscription[id] = {}; // Initialiser l'objet booleanActionsByInscription[id]

        for (const action of this.actionsByInscription[id]) {
          this.apiService.getScoreActionInscription(id, action.id).subscribe(
            (datas2) => {
              if (!this.scoreActionsByInscription[id]) {
                this.scoreActionsByInscription[id] = {}; // Créer un objet vide si nécessaire
              }
              this.scoreActionsByInscription[id][action.id] = datas2; // Stocker le score correspondant à l'inscription et à l'action avec les ids associés
            },
            (error) => {
              console.error(error);
            }
          );
          this.apiService.checkActionDone(id, action.id).subscribe((datas3) => {
            this.booleanActionsByInscription[id][action.id] = datas3;
          });
        }
      },
      (error) => {
        console.error(error);
      }
    );
  }

  doAction(idInscription: number, idAction: number): void {
    this.apiService.doAction(idInscription, idAction).subscribe(
      (datas) => {
        console.log('Action réussie');
        this.refreshPage();
      },
      (error) => {
        console.error(error);
      }
    );
  }

  onCheckboxChange(idInscription: any, idAction: any): void {
    this.apiService.checkActionDone(idInscription, idAction).subscribe(
      (datas) => {
        if (datas == false) {
          this.doAction(idInscription, idAction);
        } else if (datas == true) {
          this.cancelAction(idInscription, idAction);
        }
      },
      (error) => {
        console.error(error);
      }
    );
  }

  cancelAction(idInscription: number, idAction: number): void {
    this.apiService.cancelAction(idInscription, idAction).subscribe(
      (datas) => {
        console.log('Action annulée');
        this.refreshPage();
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
        this.refreshPage();
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
