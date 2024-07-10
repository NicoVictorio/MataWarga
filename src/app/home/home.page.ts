import { Component, OnInit } from '@angular/core';
import { KejadianserviceService } from '../kejadianservice.service';
import { __param } from 'tslib';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  kejadians: any[] = [];

  constructor(private kejadianservice: KejadianserviceService) { }

  like(id: number) {
    this.kejadianservice.addLike(id);
  }

  dislike(id: number) {
    this.kejadianservice.addDislike(id);
  }

  ngOnInit() {
    this.kejadianservice.kejadiansList().subscribe((data) => {
      console.log(data);
      this.kejadians = data;
    });
  }
}
