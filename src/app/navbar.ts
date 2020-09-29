import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  template: `
    <nav>
      <ul>
        <li>Main</li>
        <li>About</li>
        <li>Vision</li>
        <li>Mission</li>
        <li>Contact</li>
      </ul>
    </nav>
  `,
  styles: [
    `
      ul {
        margin: 0;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        background-color: #006;
        color: #fff;
        list-style-type: none;
        line-height: 4em;
        font-size: 1.4em;
      }
      li:hover {
        opacity: 0.5;
      }
    `,
  ],
})
export class Navbar {
  constructor() {}
}
