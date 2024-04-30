import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {
  users = [
    {
      fullname: "Nico Victorio",
      username: "nico",
      password: "nico",
      url: "https://media.licdn.com/dms/image/D5603AQHx9OkxxZHyyw/profile-displayphoto-shrink_800_800/0/1685090675110?e=2147483647&v=beta&t=yfOMqGmC17Pzlrqc_fgk-hNnibFh2feEA9ow8Tm93EY"
    },
    {
      fullname: "Vincent Kurniawan Hadinata",
      username: "vkh",
      password: "vkh",
      url: "https://avatars.githubusercontent.com/u/86843417?v=4"
    },
  ]

  constructor() { }

  signup(p_fullname: string, p_username: string, p_password: string, p_url: string) {
    this.users.push({
      fullname: p_fullname, username: p_username, password: p_password, url: p_url
    })
  }
}
