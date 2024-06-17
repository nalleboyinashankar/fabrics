import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AspUsersComponent } from './asp-users/asp-users.component';
import { AppComponent } from './app.component';
import { LookUpComponent } from './look-up/look-up.component';
import { CountryComponent } from './country/country.component';
import { StateComponent } from './state/state.component';
import { BuyerComponent } from './buyer/buyer.component';
import { OpenaddComponent } from './openadd/openadd.component';

const routes: Routes = [

  {path:'',component:HomeComponent},
  {path:'userinfo', component:AspUsersComponent},
  {path:'Countryinfo', component:CountryComponent},
  {path:'stateinfo', component:StateComponent},
  {path:'buyerinfo', component:BuyerComponent},
  {path:'add',component:OpenaddComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
