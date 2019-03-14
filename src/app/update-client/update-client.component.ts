import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ClientService } from '../services/client.service';
import { UpdateClientService } from '../services/update-client.service';

@Component({
  selector: 'app-update-client',
  templateUrl: './update-client.component.html',
  styleUrls: ['./update-client.component.scss']
})
export class UpdateClientComponent implements OnInit {

  clientForm= this.formBuilder.group({
    id:[],
    nom:['', Validators.required],
    prenom:['', Validators.required]
  })

  constructor(private formBuilder: FormBuilder, 
              private updateClientService: UpdateClientService,
              private router:Router,
              private clientService: ClientService) { }

  ngOnInit() {
    let client = this.updateClientService.getterClient(); 
    this.setClientForm(client);
  }

  setClientForm(client){
    this.clientForm.controls['id'].setValue(client.id);
    this.clientForm.controls['nom'].setValue(client.nom);
    this.clientForm.controls['prenom'].setValue(client.prenom);
  }

  updateClient(){
    this.clientService.updateClient(this.clientForm.value)
                        .subscribe(
                          data=>{
                            this.router.navigate(['/clients']);
                          },
                          error=>{
                            console.log(error);
                          });
  }
}
