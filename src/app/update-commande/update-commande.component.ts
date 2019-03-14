import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { UpdateCommandeService } from '../services/update-commande.service';
import { Router } from '@angular/router';
import { CommandeService } from '../services/commande.service';

@Component({
  selector: 'app-update-commande',
  templateUrl: './update-commande.component.html',
  styleUrls: ['./update-commande.component.scss']
})
export class UpdateCommandeComponent implements OnInit {
  commande: any;
  commandeForm= this.formBuilder.group({
    id:[],
    produit:['', Validators.required],
    quantite:['', Validators.required]
  })

  constructor(private formBuilder: FormBuilder, 
              private updateCommandeService: UpdateCommandeService,
              private router:Router,
              private commandeService: CommandeService) { }

  ngOnInit() {
    this.commande = this.updateCommandeService.getterCommande(); 
    this.setCommandeForm();
  }

  setCommandeForm(){
    this.commandeForm.controls['id'].setValue(this.commande.id);
    this.commandeForm.controls['produit'].setValue(this.commande.produit);
    this.commandeForm.controls['quantite'].setValue(this.commande.quantite);
  }
  
  updateCommande(){
    this.commandeService.updateCommande(this.commandeForm.value)
                        .subscribe(
                          data=>{
                            this.router.navigate(['/commandes']);
                          },
                          error=>{
                            console.log(error);
                          });
  }

}
