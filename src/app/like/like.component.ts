import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.scss']
})
export class LikeComponent {
  @Input('is-active')
  isActive!: boolean;
  @Input('likes-count')
  likesCount!: number;


  onClick(){
    this.likesCount += (this.isActive) ? -1 : +1;
    this.isActive = !this.isActive;
  }
}
