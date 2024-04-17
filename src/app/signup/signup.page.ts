import { Component, OnInit } from '@angular/core';
import { LoginserviceService } from '../loginservice.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  username = ""
  password = ""
  fullname = ""
  url = ""

  constructor(private loginservice: LoginserviceService, private router: Router) { }

  ngOnInit() {
  }

  signup() {
    if (this.username != "" && this.password != "" && this.fullname != "" && this.url != "") {
      this.loginservice.signup(this.fullname, this.username, this.password, this.url)
      alert("Sign Up Success!");
      this.router.navigate(['/login']);
    }
    else {
      alert("Data not completed yet!");
    }
  }

  login(){
    this.router.navigate(['/login']);
  }
}
