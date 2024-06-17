import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CardModule } from 'primeng/card';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableModule } from 'primeng/table';
import { HomeComponent } from './home/home.component';
import { AspUsersComponent } from './asp-users/asp-users.component';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { DialogModule } from 'primeng/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ToastModule } from 'primeng/toast';
import { DropdownModule } from 'primeng/dropdown';
import { LookUpComponent } from './look-up/look-up.component';
import { CountryComponent } from './country/country.component';
import { StateComponent } from './state/state.component';
import { BuyerComponent } from './buyer/buyer.component';
import { StyleMasterComponent } from './style-master/style-master.component';
import { OpenaddComponent } from './openadd/openadd.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AspUsersComponent,
    LookUpComponent,
    CountryComponent,
    StateComponent,
    BuyerComponent,
    StyleMasterComponent,
    OpenaddComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    TableModule,
    CardModule,
    ButtonModule,
    InputTextModule,
    DialogModule,
    ReactiveFormsModule,
    FormsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
ToggleButtonModule,
MatDialogModule,
MatSlideToggleModule,
ToastModule,
DropdownModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
