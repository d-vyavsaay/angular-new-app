import { Component, EventEmitter, Input, Output } from '@angular/core';

export interface FavouriteChangeEventDetails{
  newValue:boolean
}

@Component({
  selector: 'favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.scss']
})
export class FavouriteComponent {

  @Input('is-favourite') isFavourite = false;
  //make 'change' an output field.
  @Output('change') change = new EventEmitter();

  constructor(){

  }

  onClick(){
    this.isFavourite = !this.isFavourite;
    //emit the custom event on click
    this.change.emit({newValue: this.isFavourite});
  }

}
