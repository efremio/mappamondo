import { Component, OnInit, Input } from '@angular/core';

import { Flight } from '../../data-retriever/flight'
import { Airport } from '../../data-retriever/airport';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})


export class MapComponent {
  @Input() flights: Flight[];
  @Input() airports: Airport[];

  //google maps zoom level
  zoom: number = 2;

  //initial center position for the map
  latCenter: number = 20;
  lngCenter: number = 10;

  strokeColor = "#37474F"; //"#757575";
  backgroundColor = "#CFD8DC";
  useGeodesicLines = true;
  markerIcon = {
    url: 'assets/images/map-marker-32.png',
    scaledSize: {
      width: 8,
      height: 14
    }
  };

  styles = [
    {
      "featureType": "administrative",
      "elementType": "all",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "administrative.country",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "visibility": "on"
        },
        {
          "color": "#5f5f5f"
        },
        {
          "invert_lightness": true
        }
      ]
    },
    {
      "featureType": "administrative.locality",
      "elementType": "all",
      "stylers": [
        {
          "visibility": "simplified"
        },
        {
          "color": "#b2b2b2"
        }
      ]
    },
    {
      "featureType": "landscape",
      "elementType": "all",
      "stylers": [
        {
          "visibility": "simplified"
        }
      ]
    },
    {
      "featureType": "landscape.natural",
      "elementType": "labels.text",
      "stylers": [
        {
          "color": "#5f5f5f"
        },
        {
          "invert_lightness": true
        }
      ]
    },
    {
      "featureType": "poi",
      "elementType": "all",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "labels",
      "stylers": [
        {
          "visibility": "simplified"
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "all",
      "stylers": [
        {
          "visibility": "off"
        },
        {
          "color": "#ffffff"
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "geometry",
      "stylers": [
        {
          "visibility": "simplified"
        }
      ]
    },
    {
      "featureType": "road.local",
      "elementType": "all",
      "stylers": [
        {
          "visibility": "on"
        }
      ]
    },
    {
      "featureType": "transit",
      "elementType": "all",
      "stylers": [
        {
          "visibility": "simplified"
        }
      ]
    },
    {
      "featureType": "transit.line",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#ffffff"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "all",
      "stylers": [
        {
          "visibility": "simplified"
        },
        {
          "color": "#abbaa4"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#CFD8DC"
        }
      ]
    }
  ];

  getAirport(id: string): Airport {
    return this.airports.filter(airport => airport.id === id)[0];
  }

}