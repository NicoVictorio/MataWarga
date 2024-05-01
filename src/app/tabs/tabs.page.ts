import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
})
export class TabsPage {
  isLoggedIn: boolean = true;
  constructor(private router: Router) {}

  logout() {
    this.isLoggedIn = false;
    this.router.navigateByUrl('/tabs/login');
  }
}
