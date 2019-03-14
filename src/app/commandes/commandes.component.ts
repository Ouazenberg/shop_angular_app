import { Component, OnInit } from '@angular/core';
import { CommandeService } from '../services/commande.service';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { UpdateCommandeService } from '../services/update-commande.service';

@Component({
  selector: 'app-commandes',
  templateUrl: './commandes.component.html',
  styleUrls: ['./commandes.component.scss']
})
export class CommandesComponent implements OnInit {

  listCommandes=null;
  commande= this.formBuilder.group({
    produit:['', Validators.required],
    quantite:['', Validators.required]
  })

  constructor(private commandeService: CommandeService, 
              private formBuilder: FormBuilder,
              private http: HttpClient,
              private router:Router,
              private updateCommandeService: UpdateCommandeService) { }

  ngOnInit() {
      this.getCommandes();      
  }

  getCommandes(){
    this.commandeService.getCommandes().subscribe(data=>{
      this.listCommandes=data; 
    });
  }

  goToEdit(com){
    this.updateCommandeService.setterCommande(com);
    this.router.navigate(['/commandes/edit']);
  }

  deleteCommande(com){
    this.commandeService.deleteCommande(com.id).subscribe(data=> this.getCommandes()); 
  }
}
