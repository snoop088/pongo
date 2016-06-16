import { Component } from '@angular/core';
import { SearchformComponent } from './searchform';
import { ViewresultsComponent } from './viewresults';
import { GetspotifydataService } from './getspotifydata.service';
import {SearchParams} from './searchParams';
import { HTTP_PROVIDERS } from '@angular/http';

@Component({
  moduleId: module.id,
  selector: 'pongo-app',
  templateUrl: 'pongo.component.html',
  directives: [SearchformComponent, ViewresultsComponent],
  providers: [GetspotifydataService, HTTP_PROVIDERS]
})
export class PongoAppComponent {
  private _searchResultData;
  private _searchType: string;
  title = 'Pongo is a Rolling Stone!';

  constructor(private _getSpotifyData: GetspotifydataService) {

  }
  private _getSearchParams($event: SearchParams): void {
    this._searchType = $event.searchType;
    this._searchResultData = this._getSpotifyData.getData($event);
  }
}
