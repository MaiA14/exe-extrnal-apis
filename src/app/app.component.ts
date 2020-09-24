import { Component, OnInit } from '@angular/core';

import { User } from './user.model';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  users$: User[];

  constructor(private userService: UserService) { }


  ngOnInit() {
    return this.userService.getUsers()
      .subscribe(data => this.users$ = data);
  }
}
