import { Component } from '@angular/core';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title='TODOs'

  constructor(private userService: UserService) {
    userService.userUpdated.subscribe(() => this.title = `TODOs${this.userService.user ? ' for ' + this.userService.user : ''}`)
  }

}
