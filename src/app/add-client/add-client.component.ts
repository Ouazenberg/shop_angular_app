import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ClientService } from '../services/client.service';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.scss']
})
export class AddClientComponent implements OnInit {
  clientForm= this.formBuilder.group({
    nom:['', Validators.required],
    prenom:['', Validators.required]
  })

  constructor(private formBuilder: FormBuilder, 
              private router:Router,
              private clientService: ClientService) { }

  ngOnInit() { 
  }

  createClient(){
    this.clientService.addClient(this.clientForm.value)
                        .subscribe(
                          data=>{
                            this.router.navigate(['/clients']);
                          },
                          error=>{
                            console.log(error);
                          });
  }
}
