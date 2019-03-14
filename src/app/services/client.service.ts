import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  source: string = "http://localhost:8080";

  constructor(private http: HttpClient) { }

  getClients(){
    return this.http.get(this.source+"/clients?projection=pcl");
  }

  deleteClient(cli){
    for(let com of cli.listCommandes){
    this.http.delete(this.source+"/commandes/"+com.id)
             .subscribe(data=> data);
    }
    return this.http.delete(this.source+"/clients/"+cli.id);
  }

  updateClient(client){
    let changes={nom:client.nom, prenom:client.prenom};
    return this.http.patch(this.source+"/clients/"+client.id,changes);
  }

  addClient(client){
    return this.http.post(this.source+"/clients",client);
  }
}
