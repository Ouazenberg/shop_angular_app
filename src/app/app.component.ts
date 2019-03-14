import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Shop-app';
  comm = {
    id: '9',
    produit: 'Apple',
    quantite: '99'
  }
}
