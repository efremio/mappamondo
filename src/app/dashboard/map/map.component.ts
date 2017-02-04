import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})


export class MapComponent {
  //google maps zoom level
  zoom: number = 2;
  scrollwheelEnabled = false;
  streetViewControlEnabled = false;

  //initial center position for the map
  latCenter: number = 40.673858;
  lngCenter: number = 7.815982;

  strokeColor = "#f29";
  strokeWeight = 2;
  //test
  latA: number = 40.673858;
  lngA: number = -10.815982;

  latB: number = 40.673858;
  lngB: number = 20.815982;

  styles = [
    {
      featureType: "administrative",
      elementType: "all",
      stylers: [{ visibility: "off" }]
    },
    {
      featureType: "administrative.country",
      elementType: "labels.text.fill",
      stylers: [{ visibility: "on" }, { color: "#747474" }, { invert_lightness: true }]
    },
    {
      featureType: "administrative.locality",
      elementType: "all",
      stylers: [{ visibility: "simplified" }, { color: "#b2b2b2" }]
    },
    {
      featureType: "landscape",
      elementType: "all",
      stylers: [{ visibility: "simplified" }]
    },
    {
      featureType: "poi",
      elementType: "all",
      stylers: [{ visibility: "off" }]
    },
    {
      featureType: "road",
      elementType: "labels",
      stylers: [{ visibility: "simplified" }]
    },
    {
      featureType: "road.highway",
      elementType: "all",
      stylers: [{ visibility: "off" }, { color: "#ffffff" }]
    },
    {
      featureType: "road.highway",
      elementType: "geometry",
      stylers: [{ visibility: "simplified" }]
    },
    {
      featureType: "road.local",
      elementType: "all",
      stylers: [{ visibility: "on" }]
    },
    {
      featureType: "transit",
      elementType: "all",
      stylers: [{ visibility: "simplified" }]
    },
    {
      featureType: "transit.line",
      elementType: "geometry",
      stylers: [{ color: "#ffffff" }]
    },
    {
      featureType: "water",
      elementType: "all",
      stylers: [{ visibility: "simplified" }, { color: "#abbaa4" }]
    },
    {
      featureType: "water",
      elementType: "geometry",
      stylers: [{ color: "#94dbf3" }]
    }
  ];

}