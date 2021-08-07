import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl'; 
// manera de importar sin ts var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'MapasApp';

  ngOnInit()
  {
    //! AccessToken Global
    (mapboxgl as any).accessToken =environment.mapboxToken;
  }
}
