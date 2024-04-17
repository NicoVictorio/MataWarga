import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})

export class AppComponent {
  user: string | null = "";

  constructor(private router: Router) { }

  ngOnInit() {
    this.user = localStorage.getItem('user');
  }

  logout() {
    localStorage.setItem('user', "");
    this.router.navigate(['/login']);
  }
}
