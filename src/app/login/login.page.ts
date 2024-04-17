import { Component, OnInit } from '@angular/core';
import { LoginserviceService } from '../loginservice.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  username = ""
  password = ""

  users: any[] = []

  constructor(private loginservice: LoginserviceService, private router: Router) { }

  ngOnInit() {
    this.users = this.loginservice.users
    window.location.reload()
  }

  login() {
    if (this.username != "" && this.password != "") {
      const user = this.users.find(u => u.username === this.username && u.password === this.password);
      if (user) {
        alert('Login successful!')
        localStorage.setItem('user', user.username);
        this.router.navigate(['/home']);
      } else {
        alert('Invalid username or password.');
      }
    }
    else {
      alert("Username and Password cannot be empty!");
    }
    this.username = ""
    this.password = ""
  }

  signup() {
    this.router.navigate(['/signup']);
  }
}
