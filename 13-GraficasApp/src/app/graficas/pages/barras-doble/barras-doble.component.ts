import { Component, OnInit } from '@angular/core';
import { ChartDataSets } from 'chart.js';



@Component({
  selector: 'app-barras-doble',
  templateUrl: './barras-doble.component.html',
  styles: [
  ]
})
export class BarrasDobleComponent {

  provedoresData: ChartDataSets[] =[
    {data:[100,200,300,400,500] , label:'David'},
    {data:[50,150,250,320,120] , label:'Micha'}
  ]

  provedoresLabels: string[] = ['2020', '2021','2022','2023','2024','2025']

  productoData: ChartDataSets[] = [
    { data : [10,30,12,5,40] , label:'Carros', backgroundColor:'#f0bd59'}
  ];

  

}
