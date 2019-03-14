import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { CommandeService } from '../services/commande.service';
import { ClientService } from '../services/client.service';
import { createComponent } from '@angular/compiler/src/core';

@Component({
  selector: 'app-add-commande',
  templateUrl: './add-commande.component.html',
  styleUrls: ['./add-commande.component.scss']
})

export class AddCommandeComponent implements OnInit {

  commandeForm= this.formBuilder.group({
    produit:['', Validators.required],
    quantite:['', Validators.required],
    client: this.formBuilder.group({
      id:[],
      nom: [''],
      prenom: ['']
    })
  })

  constructor(private formBuilder: FormBuilder, 
              private router:Router,
              private commandeService: CommandeService,
              private clientService: ClientService) { }

  ngOnInit() {

    }

  insertCommande(){
    let commande = this.commandeForm.value;
    this.clientService.addClient(commande.client)
                      .subscribe(
                        data=>{
                          commande.client = data;
                          let client = commande.client._links.self.href;
                          commande.client=client;
                          this.createCommande(commande);
                        }
                      )
  }
  

  createCommande(commande){
    this.commandeService.addCommande(commande)
                        .subscribe(
                          data=>{
                            this.router.navigate(['/commandes']);
                          },
                          error=>{
                            console.log(error);
                          });
  }
}
