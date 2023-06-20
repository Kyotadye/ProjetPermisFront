import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllUsersComponent } from './all-users/all-users.component';
import { AllActionsComponent } from './all-actions/all-actions.component';

const routes: Routes = [
  { path: 'all-users', component: AllUsersComponent },
  { path: 'all-actions', component: AllActionsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
