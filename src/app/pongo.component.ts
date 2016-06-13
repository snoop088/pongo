import { Component } from '@angular/core';
import { SearchformComponent } from './searchform';
import { ViewresultsComponent } from './viewresults';
import { GetspotifydataService } from './getspotifydata.service';
import { HTTP_PROVIDERS } from '@angular/http';

@Component({
  moduleId: module.id,
  selector: 'pongo-app',
  templateUrl: 'pongo.component.html',
  directives: [SearchformComponent, ViewresultsComponent],
  providers: [GetspotifydataService, HTTP_PROVIDERS]
})
export class PongoAppComponent {
  title = 'Pongo is a Rolling Stone!';

  constructor(private _getSpotifyData: GetspotifydataService) {

  }
  private _getSearchParams($event): void {
    console.log($event);

    this._getSpotifyData.getData($event)
        .subscribe(data => console.log(data));
  }
}
