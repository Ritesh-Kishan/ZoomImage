import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'PhotoZoom';

  PhotoFlag=false;
  ShowImage(){
    this.PhotoFlag = true
    console.log("Button clicked");
  }
  CloseImage(){
    // this.PhotoFlag  = false;
    console.log("Close Image");
  }
  close(){
    this.PhotoFlag=false;
  }
}
