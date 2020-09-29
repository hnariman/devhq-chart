import { Component } from '@angular/core';
declare var google: any;

@Component({
  selector: 'app-root',
  styles: [
    `
      section {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 100vh;
      }
      .icon {
        user-select: none;
        position: absolute;
        right: 10%;
        top: 20%;
      }
      .modal {
        position: absolute;
        top: 20%;
        right: 10%;
        display: flex;
        flex-direction: column;
        align-items: center;
        border: 1px solid silver;
        border-radius: 4px;
        user-select: none;
      }
      .modal * {
        padding: 0.7em;
      }
      .modal *:hover {
        background: #bfbfbf;
        opacity: 0.6;
      }
      .modal nth-child(odd) {
        margin-top: 1em;
      }
    `,
  ],
  template: `
    <section>
      <app-navbar></app-navbar>
      <div class="container">
        <div *ngIf="showMenu" class="modal">
          <mat-icon (click)="toggle(1)">insert_chart_outlined</mat-icon>
          <mat-icon (click)="toggle(0)">table_view</mat-icon>
        </div>
        <div *ngIf="!showMenu" class="icon" (click)="toggleMenu()">
          <mat-icon>more_vert</mat-icon>
        </div>
      </div>
      <app-chart [data]="data" *ngIf="showChart"></app-chart>
      <app-table [data]="data" *ngIf="!showChart"></app-table>
      <app-footer></app-footer>
    </section>
  `,
})
export class Main {
  constructor() {}
  invert = (value) => (value = !value);
  toggleMenu = () => (this.showMenu = !this.showMenu);
  toggle = (value) => {
    this.toggleMenu();
    this.showChart = value;
  };
  showMenu: boolean = false;
  showChart: boolean = true;
  data: Array<string | number> = [];

  ngOnInit() {
    fetch('https://lb.devhq.in/myskills/api/v1/skills')
      .then((res) => res.json())
      .then((data) => (this.data = data.map((x) => [x.title, x.score])))
      .catch((err) => console.log(err));
  }
}
