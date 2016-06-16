import { Component, OnInit, Input } from '@angular/core';
import { SimpleArtist } from '../simpleartist';
import {MD_CARD_DIRECTIVES} from '@angular2-material/card';

@Component({
  moduleId: module.id,
  selector: 'strack',
  templateUrl: 'track.component.html',
  styleUrls: ['track.component.css'],
  directives: [MD_CARD_DIRECTIVES]
})
export class TrackComponent implements OnInit {
  
  @Input() private _trackData: any;

  private _trackName:string;
  private _trackUrl:string;
  private _previewUrl:string;
  private _trackPopularity:string;
  private _trackArtists: SimpleArtist[] = [];
  constructor() {}

  ngOnInit() {
    this._trackName = this._trackData.name; 
    this._trackUrl = this._trackData.external_urls.spotify;
    this._previewUrl = this._trackData.preview_url;
    this._trackPopularity = this._trackData.popularity;
    
    for (let i = 0; i < this._trackData.artists.length; i++) {
      this._trackArtists[i] = {
          name: this._trackData.artists[i].name,
          url: this._trackData.artists[i].external_urls.spotify
      };
    }
  }

}
