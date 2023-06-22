import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  public getAllUsers(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/utilisateur/listerUtilisateur`);
  }

  public getAllActions(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/action/listerAction`);
  }

  public deleteAction(id: number): Observable<any> {
    return this.http.delete<any>(
      `${this.baseUrl}/action/supprimerAction/${id}`
    );
  }

  public getActionById(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/action/getAction/${id}`);
  }

  public modifyAction(id: number, data: any): Observable<any> {
    return this.http.put<any>(
      `${this.baseUrl}/action/modifierAction/${id}`,
      data
    );
  }

  public getMissionByActionId(id: number): Observable<any> {
    return this.http.get<any>(
      `${this.baseUrl}/action/getMissionByAction/${id}`
    );
  }

  public supprimerLienActionMission(
    idMission: number,
    idAction: number
  ): Observable<any> {
    return this.http.delete<any>(
      `${this.baseUrl}/mission/${idMission}/supprimerAction/${idAction}`
    );
  }

  public ajoutAction(data: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/action/ajouterAction`, data);
  }
}
