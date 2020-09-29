import { Component } from '@angular/core';

@Component({
  selector: 'app-table',
  styles: [
    `
      .table {
        width: 60%;
        margin: 3em auto;
      }
      .t-header {
        display: flex;
      }
      .t-header div {
        background: #333399;
        color: white;
        text-align: center;
        flex: 1;
        padding: 0.2em;
        border: 1px solid grey;
      }
      .row {
        display: flex;
        flex-flow: row wrap;
        justify-content: space-between;
      }
      .row:nth-child(even) {
        background: #33336622;
      }
      .row div {
        text-align: center;
        flex: 1;
        padding: 0.2em;
        border: 1px solid grey;
      }
    `,
  ],
  template: `
    <section class="table">
      <div *ngIf="data" class="t-header">
        <div>Skill</div>
        <div>Score</div>
      </div>
      <main *ngFor="let each of data" class="row">
        <div>{{ each.title }}</div>
        <div>{{ each.score }}</div>
      </main>
    </section>
  `,
})
export class Table {
  data = [];
  ngOnInit() {
    fetch('https://lb.devhq.in/myskills/api/v1/skills')
      .then((res) => res.json())
      .then((data) => (this.data = data))
      .catch((err) => err);
  }
}
