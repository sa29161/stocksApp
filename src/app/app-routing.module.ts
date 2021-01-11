import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './core/auth.guard';
import { LoginGuardGuard } from './core/login-guard.guard';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { InfoComponent } from './info/info.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RegistrationComponent } from './registration/registration.component';
import { StockChartComponent } from './stock-chart/stock-chart.component';
import { StockListComponent } from './stock-list/stock-list.component';
import { StockComponent } from './stock/stock.component';

const routes: Routes = [
  {path:'',component: LoginComponent,canActivate: [LoginGuardGuard] },
  {path: 'login', component: LoginComponent,canActivate: [LoginGuardGuard]  },
  {path: 'register', component: RegistrationComponent},
  {path: 'stock', component: StockComponent, canActivate: [AuthGuard]},
  {path: 'list', component: StockListComponent, canActivate: [AuthGuard]},
  {path: 'info', component: InfoComponent, canActivate: [AuthGuard]},
  {path: 'logout', component: LogoutComponent},
  {path: 'chart', component: StockChartComponent},
  {path: 'home', component: HomeComponent},
  {path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
