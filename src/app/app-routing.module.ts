import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './core/auth.guard';
import { InfoComponent } from './info/info.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RegistrationComponent } from './registration/registration.component';
import { StockListComponent } from './stock-list/stock-list.component';
import { StockComponent } from './stock/stock.component';

const routes: Routes = [
  {path:'',component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegistrationComponent},
  {path: 'stock', component: StockComponent, canActivate: [AuthGuard]},
  {path: 'list', component: StockListComponent, canActivate: [AuthGuard]},
  {path: 'info', component: InfoComponent, canActivate: [AuthGuard]},
  {path: 'logout', component: LogoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
