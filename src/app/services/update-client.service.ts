import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UpdateClientService {
  
  client:any;

  constructor() { }

  getterClient(){
    return this.client;
  }

  setterClient(client: any){
    this.client = client;
  }
}
