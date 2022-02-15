import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { Color, Label, MultiDataSet } from 'ng2-charts';
import { GraficasService } from '../../services/graficas.service';



@Component({
  selector: 'app-dona-htpp',
  templateUrl: './dona-http.component.html',
  styles: [
  ]
})


export class DonaHttpComponent implements OnInit {

  
     // Doughnut
     public doughnutChartLabels: Label[] = [
      //  'Empenadas', 'Arroz', 'maiz'
    ];
     public doughnutChartData: MultiDataSet = [
      //  [350, 450, 100]
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
  constructor(private graficasService:GraficasService) { }

  ngOnInit(): void {

 /*    this.graficasService.getUsuariosRedesSociales().subscribe(data => {
      const labels = Object.keys(data);
      const values = Object.values(data);
      this.doughnutChartLabels= labels;
      this.doughnutChartData= values;

    }) */

    this.graficasService.getUsuariosRedesSocialesRxjs().subscribe(data =>{
      this.doughnutChartLabels= data.labels;
      this.doughnutChartData= data.values;
    })
  }



}
