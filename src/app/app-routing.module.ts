import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllUsersComponent } from './components/all-users/all-users.component';
import { AllActionsComponent } from './components/all-actions/all-actions.component';
import { ModifyActionComponent } from './components/modify-action/modify-action.component';
import { AddActionComponent } from './components/add-action/add-action.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AllMissionsComponent } from './components/all-missions/all-missions.component';
import { ModifyMissionComponent } from './components/modify-mission/modify-mission.component';
import { AddMissionComponent } from './components/add-mission/add-mission.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'all-users', component: AllUsersComponent },
  { path: 'all-actions', component: AllActionsComponent },
  { path: 'modify-action/:id', component: ModifyActionComponent },
  { path: 'add-action', component: AddActionComponent },
  { path: 'connection', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'all-missions', component: AllMissionsComponent },
  { path: 'modify-mission/:id', component: ModifyMissionComponent },
  { path: 'add-mission', component: AddMissionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
