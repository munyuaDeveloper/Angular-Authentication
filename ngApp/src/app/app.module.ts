import { AuthGuard } from './auth.guard';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthService } from './auth.service';
import { TokenInterceptorService } from './token-interceptor.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidenavComponent } from './dashboard/sidenav/sidenav.component';
import { ChartsComponent } from './dashboard/charts/charts.component';
import { NotificationsComponent } from './dashboard/notifications/notifications.component';
import { ReportsComponent } from './dashboard/reports/reports.component';
import { EscalatedTasksComponent } from './dashboard/escalated-tasks/escalated-tasks.component';
import { TasksCounterComponent } from './dashboard/tasks-counter/tasks-counter.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UserServicesComponent } from './user-services/user-services.component';
import { RegistrationComponent } from './user-services/registration/registration.component';
import { ValuationComponent } from './user-services/valuation/valuation.component';
import { AdministrationComponent } from './user-services/administration/administration.component';
import { SurveyComponent } from './user-services/survey/survey.component';
import { AdjudicationComponent } from './user-services/adjudication/adjudication.component';
import { PlanningComponent } from './user-services/planning/planning.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    SidenavComponent,
    ChartsComponent,
    NotificationsComponent,
    ReportsComponent,
    EscalatedTasksComponent,
    TasksCounterComponent,
    NavbarComponent,
    UserServicesComponent,
    RegistrationComponent,
    ValuationComponent,
    AdministrationComponent,
    SurveyComponent,
    AdjudicationComponent,
    PlanningComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
    
  ],
  providers: [AuthService, AuthGuard,
  {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
