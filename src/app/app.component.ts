import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Forms';

  topics = ['Angular', 'React', 'Vue'];
  topicHasError = true;


  userModel = new User ('Rob','mary@gmail.com',555-555-7896,'','default','morning', true);

  validateTopic(value) {
    if(value === 'default'){
      this.topicHasError = true;
    } else {
      this.topicHasError = false; 
    }
  }

}
