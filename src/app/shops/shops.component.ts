import { Component } from '@angular/core';
import { Shop } from '../shop';

@Component({
  selector: 'app-shops',
  templateUrl: './shops.component.html',
  styleUrls: ['./shops.component.css']
})
export class ShopsComponent {
  exampleShop: Shop = {
    id: 0,
    name: "Pleda Bela Boltja",
    address: {
      country: "Hungary",
      zip: "1111",
      city: "Budapest",
      street: "Seholsincsen utca",
      number: -1
    },
    phone: "+36 00/123-4567",
    coord: [0,0]
  }
}
