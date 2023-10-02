import { Component } from '@angular/core';
import { FavouriteChangeEventDetails } from './favourite/favourite.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'new-angular-app';

  post = {
    title: "Title",
    isFavourite : true
  }

  tweet = {
    isActive : true,
    likeCount : 10
  }
  
  viewMode ='map';

  favouriteChanged(eventDetails:FavouriteChangeEventDetails){
    console.log('Favourite changed: ' + eventDetails.newValue)
  }

}
