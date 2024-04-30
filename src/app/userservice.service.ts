import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserserviceService {
  constructor() { }
  userLogin = {
    id: '',
    username: '',
    fullname: '',
    password: '',
    profile_picture: '',
  };
  
  users = [
    {
      id: '0',
      username: 'vincent',
      fullname: 'vincent kurniawan hadinata',
      password: 'vincent',
      profile_picture: 'https://picsum.photos/200/200',
    },
    {
      id: '1',
      username: 'nico',
      fullname: 'nico victorio',
      password: 'nico',
      profile_picture: 'https://picsum.photos/200/199',
    },
  ];

  addUser(
    username: string,
    fullname: string,
    password: string,
    profile_picture: string
  ) {
    this.users.push({
      id: this.users.length.toString(),
      username: username,
      fullname: fullname,
      password: password,
      profile_picture: profile_picture,
    });
  }
}
