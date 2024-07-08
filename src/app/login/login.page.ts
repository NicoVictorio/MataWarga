import { Component } from '@angular/core';
import { UserserviceService } from '../userservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  constructor(private userService: UserserviceService, private router: Router) { }

  username = '';
  password = '';
  found = false;

  login() {
    this.found = false;
    this.userService.login(this.username, this.password).subscribe((response: any) => {
        if (response.result === 'success') {
          this.found = true;
          this.userService.userLogin.id = response.id;
          this.userService.userLogin.username = this.username;
          this.userService.userLogin.fullname = response.fullname;
          this.userService.userLogin.password = this.password;  
          this.userService.userLogin.url = response.url;
          alert("success");
          this.router.navigate(['tabs/home']);
        }
        else {
          alert("username and password not match")
        }
      });
    this.username = ""
    this.password = ""
  }

  register() {
    this.router.navigate(['register']);
  }
}
