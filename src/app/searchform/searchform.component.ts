import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {FormBuilder, Validators, FormControl, FormGroup, REACTIVE_FORM_DIRECTIVES} from '@angular/forms';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import {MdUniqueSelectionDispatcher} from '@angular2-material/core';
import {MD_INPUT_DIRECTIVES} from '@angular2-material/input';
import {MD_RADIO_DIRECTIVES} from '@angular2-material/radio';

@Component({
  moduleId: module.id,
  selector: 'search-form',
  templateUrl: 'searchform.component.html',
  styleUrls: ['searchform.component.css'],
  providers: [MdUniqueSelectionDispatcher],
  directives: [ MD_INPUT_DIRECTIVES, MD_RADIO_DIRECTIVES, REACTIVE_FORM_DIRECTIVES ],
  
})
export class SearchformComponent implements OnInit {

  @Output() startSearch = new EventEmitter();
  private _searchType: string = "artist";
  private _form : FormGroup;
  private _searchtext: string = "";
    constructor(private _fb: FormBuilder) {
        
    }

  ngOnInit() {
    //this._searchtext = "test";
    this._form = this._fb.group( {
            searchtext: ['', Validators.compose([Validators.required, 
            Validators.minLength(4)])],
            searchtype: ['']
        });
        
        let searchTextInput = this._form.find('searchtext');
        // let selectType = this._form.find('selecttype');
        // console.log(selectType);
        searchTextInput.valueChanges
        .map(inp => <string>inp)
        .filter(str => str.length > 3)
        .debounceTime(450)
        .subscribe(searchText => {
          this.startSearch.emit({
            'searchText': searchText,
            'searchType': this._searchType
          })
        });
        
  }
  private _radioChange($event):void {
    if (this._form.valid) {
      let searchTextInputValue = 
        this._form.find('searchtext').value;
      
      this.startSearch.emit ({
        'searchText': searchTextInputValue,
        'searchType': this._searchType
      })
      
      //console.log("Input = " + searchTextInputValue + "Type = " + this._searchType)
    }
  }



}
