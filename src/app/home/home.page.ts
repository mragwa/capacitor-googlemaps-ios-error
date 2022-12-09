import { Component } from '@angular/core';
import { GoogleMap } from '@capacitor/google-maps';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  showDiv = false;
  ngAfterViewInit(){
    this.createMap();
  }

  newMap:any;

  async createMap(lat=21.5850987,lng=39.1593129) {
    let mapRef = document.getElementById('map') as HTMLElement;
  
    this.newMap = await GoogleMap.create({
      id: 'my-map', // Unique identifier for this map instance
      element: mapRef, // reference to the capacitor-google-map element
      apiKey: environment.mapsKey, // Your Google Maps API Key
      config: {
        center: {
          // The initial position to be rendered by the map
          lat: lat,
          lng: lng,
        },
        zoom: 18, // The initial zoom level to be rendered by the map
      },
    });
   
      console.log('map created: ' + JSON.stringify(this.newMap, null, 1));
      this.newMap.setOnCameraIdleListener((res:any)=>{
          console.log(res,"setOnCameraIdleListener")
      });
    }
  
}
