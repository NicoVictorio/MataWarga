import { Component, OnInit } from '@angular/core';
import { KejadianserviceService } from '../kejadianservice.service';
import { Router } from '@angular/router';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  kejadians: any[] = []

  constructor(private router: Router, private kejadianservice: KejadianserviceService, private userService: UserserviceService) { }

  like(id: number) {
    this.kejadianservice.addLike(id);
  }
  dislike(id: number) {
    this.kejadianservice.addDislike(id);
  }

  chunkArray(arr: any[], chunkSize: number): any[][] {
    const result = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      result.push(arr.slice(i, i + chunkSize));
    }
    return result;
  }

  ngOnInit() {
    this.kejadians = this.kejadianservice.kejadian
  }
}
