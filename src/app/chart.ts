import { Component, Input } from '@angular/core';
declare var google: any;

@Component({
  selector: 'app-chart',
  template: `
    <section class="wrapper">
      <google-chart
        style="margin: 0 auto;"
        [title]="title"
        [type]="type"
        [data]="data"
        [options]="options"
      >
      </google-chart>

      <div class="legend">
        <div *ngFor="let chunk of data; let i = index" class="item">
          <div class="box" [style.background-color]="background(i)"></div>
          <p>{{ chunk[0] }}</p>
        </div>
      </div>
    </section>
  `,
  styles: [
    `
      .wrapper {
        flex: 2 1;
        margin: 0 auto;
        width: 60%;
        padding: 0;
      }
      .legend {
        display: grid;
        width: 90%;
        margin: 2em auto;
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
      }
      .box {
        height: 20px;
        width: 20px;
        border-radius: 10px;
        margin-right: 0.5em;
      }
      .item {
        display: flex;
        height: 20px;
        margin: 5px;
      }
    `,
  ],
})
export class Chart {
  constructor() {}

  type: string = 'PieChart';
  title: string = 'My Skills';
  colors: string[] = [
    '#ff4444',
    '#4444ff',
    '#44ff44',
    '#da70f2',
    '#360f77',
    '#222288',
    '#228822',
    '#f6bedb',
    '#edbf6b',
    '#882222',
  ];
  options: object = {
    colors: this.colors,
    titleTextStyle: { fontSize: 20, bold: true },
    sliceVisibilityThreshold: 0,
    chartArea: { width: '100%', height: '100%' },
    legend: 'none',
  };
  background = (i) => this.colors[i];

  @Input() data: Array<string | number> = [];
}
