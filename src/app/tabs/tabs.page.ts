import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginserviceService } from '../loginservice.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
})
export class TabsPage {
  constructor(
    private router: Router,
    private loginService: LoginserviceService
  ) {}

  logout() {
    this.loginService.logout();
    this.router.navigateByUrl('/tabs/login');
  }
  isLoggedIn() {
    return this.loginService.isAuthenticated();
  }
}
