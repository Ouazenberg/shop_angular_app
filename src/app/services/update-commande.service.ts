import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UpdateCommandeService {

  commande:any;

  constructor() { }

  getterCommande(){
    return this.commande;
  }

  setterCommande(commande: any){
    this.commande = commande;
  }
}
