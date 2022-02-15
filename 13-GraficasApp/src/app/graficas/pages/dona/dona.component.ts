import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { Color, Label, MultiDataSet } from 'ng2-charts';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent implements OnInit {

    // Doughnut
    public doughnutChartLabels: Label[] = ['Empenadas', 'Arroz', 'maiz'];
    public doughnutChartData: MultiDataSet = [
      [350, 450, 100]
    ];
    public doughnutChartType: ChartType = 'doughnut';

    colors: Color[] =[
      {
        backgroundColor:[
          '#113042',
          '#5e5466',
          '#f66064'
        ]
      }
    ]

  constructor() { }

  ngOnInit(): void {
  }

}
