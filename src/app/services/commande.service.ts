import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommandeService {

  source: string = "http://localhost:8080";

  constructor(private http: HttpClient) { }

  getCommandes(){
    return this.http.get(this.source+"/commandes?projection=pco");
  }

  deleteCommande(id){
    return this.http.delete(this.source+"/commandes/"+id);
  }

  updateCommande(commande){
    return this.http.patch(this.source+"/commandes/"+commande.id,commande);
  }

  addCommande(commande){
    return this.http.post(this.source+"/commandes",commande);
  }
}
