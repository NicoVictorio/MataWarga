import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
})
export class TabsPage {
  constructor(
    private router: Router,
    private userService: UserserviceService
  ) { }

  logout() {
    this.userService.logout();
    this.router.navigateByUrl('/tabs/login');
    this.userService.isLoggedIn = false;
  }

  isLoggedIn() {
    return this.userService.isAuthenticated();
  }
}
