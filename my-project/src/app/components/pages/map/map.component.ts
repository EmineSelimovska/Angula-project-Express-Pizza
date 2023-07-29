import { Component, ElementRef, Input, OnChanges, ViewChild } from '@angular/core';
import { LatLng, LatLngExpression, LatLngTuple, LeafletMouseEvent, Map, Marker, icon, latLng, map, marker, tileLayer } from 'leaflet';
import { LocationService } from 'src/app/services/location.service';
import { Order } from 'src/app/shared/models/Order';

@Component({
  selector: 'map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnChanges{
 @Input()
 order!: Order;
 @Input()
 readonly = false;

  private readonly MARKER_ZOOM = 16;
  private readonly MARKER_ICON = icon({
    iconUrl:'https://img.freepik.com/free-vector/location_53876-25530.jpg?q=10&h=200',
    iconSize: [42,42],
    iconAnchor: [21,42]
  })
  private readonly DEFAULT_LATLNG: LatLngTuple = [13.75, 21.62];
 
  @ViewChild('map', {static: true})
  mapRef!:ElementRef;

  map!: Map;
  currentMarker!: Marker;

  constructor(private locationService: LocationService) {}

  ngOnChanges(): void{
    if(!this.order) return;
    this.initializeMap();

    if(this.readonly && this.addressLatLng){
      this.showLocationOnReadonly();
    }
  }
  showLocationOnReadonly() {
    const m = this.map;
    this.setMarker(this.addressLatLng);
    m.setView(this.addressLatLng, this.MARKER_ZOOM);
    
    m.dragging.disable();
    m.touchZoom.disable();
    m.doubleClickZoom.disable();
    m.scrollWheelZoom.disable();
    m.boxZoom.disable();
    m.keyboard.disable();
    m.off('click');
    m.tap?.disable();
    this.currentMarker.dragging?.disable();

  }

  initializeMap (){
    if(this.map){
      return;
    }

    this.map = map(this.mapRef.nativeElement,{
      attributionControl: false
    }).setView(this.DEFAULT_LATLNG, 1);
    
    tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(this.map);

  this.map.on('click', (e: LeafletMouseEvent) => {
    this.setMarker(e.latlng);
  })

  }
  findMyLocation(){
   this.locationService.getCurrentLocation().subscribe({
    next: (latlng) => {
      this.map.setView(latlng, this.MARKER_ZOOM)
       this.setMarker(latlng)
      }
   })
  }

  setMarker(latlng:LatLngExpression){
    this.addressLatLng = latlng as LatLng
    if(this.currentMarker){
      this.currentMarker.setLatLng(latlng)
      return;
     }

     this.currentMarker = marker(latlng, {
      draggable: true,
      icon: this.MARKER_ICON
     }).addTo(this.map);

     this.currentMarker.on('dragend', () => {
      this.addressLatLng = this.currentMarker.getLatLng();
     })
  }

  set addressLatLng(latlng: LatLng){
    if(!latlng.lat.toFixed) {
      return;
    }
   
    latlng.lat = parseFloat(latlng.lat.toFixed(8));
    latlng.lng = parseFloat(latlng.lng.toFixed(8));
    this.order.addressLatLng = latlng;
    console.log(this.order.addressLatLng);
    
  }

  get addressLatLng(){
   return this.order.addressLatLng!;
  }
}

