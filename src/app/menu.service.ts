export class DataStorage {
  chart = {
    colors: [
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
    ],
    type: 'PieChart',
    title: 'My Skills',
    options: {
      titleTextStyle: { fontSize: 20, bold: true },
      sliceVisibilityThreshold: 0,
      chartArea: { width: '100%', height: '100%' },
      legend: 'none',
    },
  };

  showTable: boolean = false;
  showModal: boolean = false;

  invert = (value) => (value = !value);

  data: {};
  getData() {
    fetch('https://lb.devhq.in/myskills/api/v1/skills')
      .then((res) => res.json())
      .then((data) => (this.data = data.map((x) => [x.title, x.score])))
      .catch((err) => console.log(err));
  }
}
