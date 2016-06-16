import { Component, OnInit, Input, OnChanges, SimpleChange } from '@angular/core';
import { ArtistComponent } from '../artist'

@Component({
  moduleId: module.id,
  selector: 'view-results',
  templateUrl: 'viewresults.component.html',
  styleUrls: ['viewresults.component.css'],
  directives: [ArtistComponent]
})
export class ViewresultsComponent implements OnInit, OnChanges {
  @Input() private _data: {}[];
  @Input() private _type: string;
  private _receivedData: {}[] = null;
  
  constructor() {}
  ngOnChanges(changes:any) {
    this._receivedData = null;
    if (this._data != null) {
      this._receivedData = changes._data.currentValue;
      //console.log(this._receivedData);  
    }
  }
  ngOnInit() {
  }

}
