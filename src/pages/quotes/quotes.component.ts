import { Component } from '@angular/core';
import { NavComponent } from '../nav/nav.component';

@Component({
  selector: 'app-quotes',
  standalone: true,
  imports: [NavComponent],
  templateUrl: './quotes.component.html',
  styleUrl: './quotes.component.css'
})
export class QuotesComponent {
  // users = [
  //   {id: 0, name: 'Sarah'},
  //   {id: 1, name: 'Amy'},
  //   {id: 2, name: 'Rachel'},
  //   {id: 3, name: 'Jessica'},
  //   {id: 4, name: 'Poornima'},
  // ];
}
