import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireMessagingModule } from '@angular/fire/messaging';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { environment } from 'src/environments/environment';
import { StockComponent } from './stock/stock.component';
import { LogoutComponent } from './logout/logout.component';
import { HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import {MatInputModule} from '@angular/material/input';

import { StockListComponent } from './stock-list/stock-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthGuard } from './core/auth.guard';
import { InfoComponent } from './info/info.component';

import { LoginGuardGuard } from './core/login-guard.guard';
import { StockChartComponent } from './stock-chart/stock-chart.component';
import { CommonModule } from '@angular/common';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';




@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    LoginComponent,
    RegistrationComponent,
    StockComponent,
    LogoutComponent,
    StockListComponent,
    InfoComponent,
    StockChartComponent,
    HomeComponent,
    ErrorComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireMessagingModule,
    AngularFireStorageModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    MatInputModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgxChartsModule,
    NgbModule
  
  ],
  providers: [ 

    AuthGuard,LoginGuardGuard
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
