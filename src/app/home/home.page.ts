import { Component, OnInit } from '@angular/core';
import { KejadianserviceService } from '../kejadianservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  kejadians: any[] = [];

  constructor(private kejadianservice: KejadianserviceService) {}

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
    this.kejadianservice.kejadiansList().subscribe((data) => {
      console.log(data);
      this.kejadians = data;
    });
  }
}
