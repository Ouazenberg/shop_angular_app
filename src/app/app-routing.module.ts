import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommandesComponent } from './commandes/commandes.component';
import { ClientsComponent } from './clients/clients.component';
import { UpdateCommandeComponent } from './update-commande/update-commande.component';
import { UpdateClientComponent } from './update-client/update-client.component';
import { AddClientComponent } from './add-client/add-client.component';
import { AddCommandeComponent } from './add-commande/add-commande.component';

const routes: Routes = [
  {path:'commandes', component:CommandesComponent},
  {path:'clients', component:ClientsComponent},
  {path:'commandes/edit', component:UpdateCommandeComponent},
  {path:'clients/edit', component:UpdateClientComponent},
  {path:'commandes/add', component:AddCommandeComponent},
  {path:'clients/add', component:AddClientComponent},
  {path:'', redirectTo:'/commandes', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
