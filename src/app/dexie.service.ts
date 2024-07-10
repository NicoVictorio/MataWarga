import { Injectable } from '@angular/core';
import Dexie from 'dexie';

@Injectable({
  providedIn: 'root',
})
export class DexieService extends Dexie {
  myKejadian: Dexie.Table<MyItem, number>;

  constructor() {
    super('MataWargaDB');
    this.version(1).stores({
      myKejadian: '++id, author, judul, deskripsi, gambar, tujuan_instansi',
    });
    this.myKejadian = this.table('myKejadian');
  }

  async addItem(
    author: string,
    judul: string,
    deskripsi: string,
    gambar: string,
    tujuan_instansi: string
  ): Promise<void> {
    await this.myKejadian.add({
      author,
      judul,
      deskripsi,
      gambar,
      tujuan_instansi,
    });
  }

  async getAllItems(): Promise<MyItem[]> {
    return this.myKejadian.toArray();
  }
}

interface MyItem {
  id?: number;
  author: string;
  judul: string;
  deskripsi: string;
  gambar: string;
  tujuan_instansi: string;
}
