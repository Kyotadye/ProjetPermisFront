import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllUsersComponent } from './components/all-users/all-users.component';
import { AllActionsComponent } from './components/all-actions/all-actions.component';
import { ModifyActionComponent } from './components/modify-action/modify-action.component';
import { AddActionComponent } from './components/add-action/add-action.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'all-users', component: AllUsersComponent },
  { path: 'all-actions', component: AllActionsComponent },
  { path: 'modify-action/:id', component: ModifyActionComponent },
  { path: 'add-action', component: AddActionComponent },
  { path: 'connection', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
