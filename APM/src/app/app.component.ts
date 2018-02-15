import { Component } from '@angular/core';

@Component({
  selector: 'pm-root',
  template: `
  <div><h1>{{pageTitle}}</h1>
    <ul class='nav navbar-nav'>
      <li><a [routerLink]="['/welcome']">Home</a></li>
      <li><a [routerLink]="['/product']">Product List</a></li>
    </ul>
  </div>
  <div class=container>
  <router-outlet></router-outlet>
  </div>
  `,
  providers: []
})
export class AppComponent {
  pageTitle: string = 'Acme Product Management';
}
