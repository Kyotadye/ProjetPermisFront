import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllUsersComponent } from './components/all-users/all-users.component';
import { AllActionsComponent } from './components/all-actions/all-actions.component';
import { HeaderComponent } from './components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CarouselComponent } from './components/carousel/carousel.component';
import { FooterComponent } from './components/footer/footer.component';
import { ModifyActionComponent } from './components/modify-action/modify-action.component';
import { FormsModule } from '@angular/forms';
import { AddActionComponent } from './components/add-action/add-action.component';
import { LoginComponent } from './components/login/login.component';
import { AuthInterceptor } from './services/auth-interceptor.service';
import { RegisterComponent } from './components/register/register.component';
import { AllMissionsComponent } from './components/all-missions/all-missions.component';
import { ModifyMissionComponent } from './components/modify-mission/modify-mission.component';
import { AddMissionComponent } from './components/add-mission/add-mission.component';
import { AllInscriptionsComponent } from './components/all-inscriptions/all-inscriptions.component';
import { AddInscriptionComponent } from './components/add-inscription/add-inscription.component';
import { InfoUserComponent } from './components/info-user/info-user.component';

@NgModule({
  declarations: [
    AppComponent,
    AllUsersComponent,
    AllActionsComponent,
    HeaderComponent,
    CarouselComponent,
    FooterComponent,
    ModifyActionComponent,
    AddActionComponent,
    LoginComponent,
    RegisterComponent,
    AllMissionsComponent,
    ModifyMissionComponent,
    AddMissionComponent,
    AllInscriptionsComponent,
    AddInscriptionComponent,
    InfoUserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
