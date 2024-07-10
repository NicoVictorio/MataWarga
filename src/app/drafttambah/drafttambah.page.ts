import { Component, OnInit } from '@angular/core';
import { DexieService } from '../dexie.service';

@Component({
  selector: 'app-drafttambah',
  templateUrl: './drafttambah.page.html',
  styleUrls: ['./drafttambah.page.scss'],
})
export class DrafttambahPage implements OnInit {
  new_judul = '';
  new_deskripsi = '';
  new_gambar = '';
  new_tujuan_instansi = '';
  new_author = '';

  constructor(private dex: DexieService) {}

  ngOnInit() {
    this.new_author = localStorage.getItem('app_username') || '';
  }

  addtocart() {
    this.dex
      .addItem(
        this.new_author,
        this.new_judul,
        this.new_deskripsi,
        this.new_gambar,
        this.new_tujuan_instansi
      )
      .then(() => {
        alert('Item added successfully.');
      })
      .catch((error) => {
        alert('Error adding item: ' + error);
      });
  }
}
