import { Component, OnInit, Input } from '@angular/core';
import {MD_CARD_DIRECTIVES} from '@angular2-material/card';

@Component({
  moduleId: module.id,
  selector: 'artist',
  templateUrl: 'artist.component.html',
  styleUrls: ['artist.component.css'],
  directives: [MD_CARD_DIRECTIVES]
})
export class ArtistComponent implements OnInit {
  @Input() private _artistData: any;
  
  private _imgUrl:string;
  private _imgThumb:string;
  private _artistName:string;
  private _artistUrl:string;
  private _artistPopularity:string;
  constructor() {}

  ngOnInit() {

    if (this._artistData.images.length > 0) {
      this._imgUrl = this._artistData.images[1] != undefined ?
        this._artistData.images[1].url : this._artistData.images[0].url;
    }
    else {
      this._imgUrl = "../img/ic_insert_photo_black_24px.svg";
    }
    this._imgThumb = this._artistData.images[2] != undefined ? 
    this._artistData.images[2].url : "../img/ic_insert_photo_black_24px.svg"
    this._artistName = this._artistData.name;
    this._artistPopularity = this._artistData.popularity;
    this._artistUrl = this._artistData.external_urls.spotify;
  }

}
