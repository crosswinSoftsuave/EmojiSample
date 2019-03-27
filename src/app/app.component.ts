import {Component} from '@angular/core';

@Component({
  selector: 'ss-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  public emojiArray = [];

  constructor() {
    for (let count = 1; count <= 100; count++) {
      this.emojiArray.push(count);
    }
  }

}
