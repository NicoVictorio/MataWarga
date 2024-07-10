import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { KejadianserviceService } from '../kejadianservice.service';
import { __param } from 'tslib';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
  kejadians: any[] = [];
  search = '';
  constructor(
    private router: Router,
    private kejadianservice: KejadianserviceService
  ) {}

  ngOnInit() {
    // this.kejadians = this.kejadianservice.kejadian;
    this.refresh();
  }

  searchByJudul(search: string) {
    this.kejadianservice.kejadiansSearch(search).subscribe((data) => {
      console.log(data);
      this.kejadians = data;
    });
  }
  refresh() {
    this.searchByJudul(this.search);
  }

  //
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
  updateDataSource() {
    this.kejadians = this.kejadianservice.searchJudul(this.search);
    console.log(this.kejadians);
  }
}
