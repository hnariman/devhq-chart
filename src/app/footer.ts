import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <footer>
      <p>Some Footer Text</p>
    </footer>
  `,
  styles: [
    `
      footer {
        background: #339;
        color: #fff;
        line-height: 2em;
        width: 100%;
        padding: 1em 0 1em;
        text-align: center;
      }
    `,
  ],
})
export class Footer {}
