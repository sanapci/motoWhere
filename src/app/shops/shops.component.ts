import { Component } from '@angular/core';
import { Shop } from './interfaces/shop';

import { SHOPS } from './mock-shops';

@Component({
  selector: 'app-shops',
  templateUrl: './shops.component.html',
  styleUrls: ['./shops.component.css']
})
export class ShopsComponent {
  shops = SHOPS;
}

/*
<h3>{{exampleShop.name}}</h3>
<p>Address: {{exampleShop.address.zip}} {{exampleShop.address.country}}, {{exampleShop.address.city}} {{exampleShop.address.street}} {{exampleShop.address.number}}.</p>
<p>Phone: {{exampleShop.phone}}</p>
<p>Opening hours:</p>
<ul>
    <li>Monday: </li>
    <li>Tuesday: </li>
    <li>Wednesday: </li>
    <li>Thursday: </li>
    <li>Friday: </li>
    <li>Saturday: </li>
    <li>Sunday: </li>
</ul>
*/