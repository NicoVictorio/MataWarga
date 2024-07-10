import { Component } from '@angular/core';
import { UserserviceService } from './userservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private userService: UserserviceService, private router: Router) {
    this.username = localStorage.getItem('app_username') ?? '';
    this.fullname = localStorage.getItem('app_fullname') ?? '';
  }
  username = '';
  password = '';
  fullname = '';
  login() {
    this.userService
      .login(this.username, this.password)
      .subscribe((response: any) => {
        if (response.result === 'success') {
          alert('success');
          this.fullname = response.fullname;
          localStorage.setItem('app_username', this.username);
          localStorage.setItem('app_fullname', this.fullname);
        } else {
          alert(response.message);
        }
      });
  }
  logout() {
    this.username = '';
    this.fullname = '';
    localStorage.removeItem('app_username');
    localStorage.removeItem('app_fullname');
  }
}
