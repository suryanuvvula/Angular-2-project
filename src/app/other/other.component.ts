import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-other',
  template: `
  <article>
  <ng-content></ng-content>
  </article>`,
  styles: [`
  h1 {
    color: red;
  }
  article{border :1px solid red;}
  article p{border :none !important;}
  `]
})
export class OtherComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
