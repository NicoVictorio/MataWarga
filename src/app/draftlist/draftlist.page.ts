import { Component, OnInit } from '@angular/core';
import { DexieService } from '../dexie.service';

@Component({
  selector: 'app-draftlist',
  templateUrl: './draftlist.page.html',
  styleUrls: ['./draftlist.page.scss'],
})
export class DraftlistPage implements OnInit {
  kejadianList: any[] = [];

  constructor(private dex: DexieService) {}

  ngOnInit() {
    this.loadKejadianList();
  }

  async loadKejadianList() {
    try {
      this.kejadianList = await this.dex.getAllItems();
    } catch (error) {
      alert('Error loading items: ' + error);
    }
  }
}
