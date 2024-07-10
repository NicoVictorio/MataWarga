import { Component, OnInit } from '@angular/core';
import { DexieService } from '../dexie.service';
import { KejadianserviceService } from '../kejadianservice.service';

@Component({
  selector: 'app-draftlist',
  templateUrl: './draftlist.page.html',
  styleUrls: ['./draftlist.page.scss'],
})
export class DraftlistPage implements OnInit {
  kejadianList: any[] = [];

  constructor(
    private dex: DexieService,
    private kejadianService: KejadianserviceService
  ) {}

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

  async deleteKejadian(itemId: number) {
    await this.dex.removeItem(itemId);
    await this.loadKejadianList();
  }

  submitIncident(
    new_id: number,
    new_author: string,
    new_judul: string,
    new_deskripsi: string,
    new_gambar: string,
    new_tujuan_instansi: string
  ) {
    this.kejadianService
      .addKejadians(
        new_author,
        new_judul,
        new_deskripsi,
        new_gambar,
        new_tujuan_instansi
      )
      .subscribe((response: any) => {
        if (response.result === 'success') {
          alert('success');
        } else {
          alert(response.message);
        }
      });
    this.deleteKejadian(new_id);
  }
}
