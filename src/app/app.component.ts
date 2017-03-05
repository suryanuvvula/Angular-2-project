import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `My main Component app Component is loaded in Inline Template!!!
             <app-other>
             <div><h1>render my other app component content </h1></div>
             </app-other>
             <app-other><p>Second line of content for other app component</p></app-other>
             <app-another></app-another>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My Angular 2 app works !';
}
