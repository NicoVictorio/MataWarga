import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserserviceService {
  constructor(private http: HttpClient) { }
  isLoggedIn: boolean = false;

  users = []
  userLogin = {
    id: '',
    username: '',
    fullname: '',
    password: '',
    url: '',
  };

  login(p_username: string, p_password: string) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const body = new URLSearchParams();
    body.set('username', p_username.toString());
    body.set('password', p_password.toString());
    const urlEncodedData = body.toString();
    this.isLoggedIn = true;
    return this.http.post(
      "https://ubaya.me/hybrid/160421029/uas_login.php", urlEncodedData, { headers });
  }

  register(p_username: string, p_password: string, p_fullname: string, p_url: string, p_base64: string) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const body = new URLSearchParams();
    body.set('username', p_username.toString());
    body.set('password', p_password.toString());
    body.set('fullname', p_fullname.toString());
    body.set('url', p_url.toString());
    if (p_base64) {
      body.set('base64', p_base64.toString());
    }
    const urlEncodedData = body.toString();
    return this.http.post("https://ubaya.me/hybrid/160421029/uas_register.php", urlEncodedData, { headers });
  }

  isAuthenticated() {
    return this.isLoggedIn;
  }

  logout() {
    this.isLoggedIn = false;
  }
}
