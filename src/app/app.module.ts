import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ClientsComponent } from './clients/clients.component';
import { CommandesComponent } from './commandes/commandes.component';
import { UpdateClientComponent } from './update-client/update-client.component';
import { UpdateCommandeComponent } from './update-commande/update-commande.component';
import { AddClientComponent } from './add-client/add-client.component';
import { AddCommandeComponent } from './add-commande/add-commande.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientsComponent,
    CommandesComponent,
    UpdateCommandeComponent,
    UpdateClientComponent,
    AddClientComponent,
    AddCommandeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
