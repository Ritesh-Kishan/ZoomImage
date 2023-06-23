import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-zoom-features',
  templateUrl: './zoom-features.component.html',
  styleUrls: ['./zoom-features.component.scss']
})
export class ZoomFeaturesComponent {

  zoomLevel: number = 100;


  zoomIn() {
    this.zoomLevel += 30;
  }

  zoomOut() {
    this.zoomLevel -= 30; 
  }
}
