import { Component, OnInit } from '@angular/core';
import { ClientService } from '../services/client.service';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { UpdateClientService } from '../services/update-client.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {

  listClients=null;
  commande= this.formBuilder.group({
    produit:['', Validators.required],
    quantite:['', Validators.required]
  })

  constructor(private clientService: ClientService, 
              private formBuilder: FormBuilder,
              private http: HttpClient,
              private router:Router,
              private updateClientService: UpdateClientService) { }

  ngOnInit() {
      this.getClients();      
  }

  getClients(){
    this.clientService.getClients().subscribe(data=>{
      this.listClients=data; 
    });
  }

  goToEdit(cli){
    this.updateClientService.setterClient(cli);
    this.router.navigate(['/clients/edit']);
  }

  deleteClient(cli){
    this.clientService.deleteClient(cli).subscribe(data=> this.getClients());
  }

}
