import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class KejadianserviceService {
  constructor(private http: HttpClient) {}

  kejadiansList(): Observable<any> {
    return this.http.get('https://ubaya.me/hybrid/160421029/uas_kejadians.php');
  }

  kejadian = [
    {
      id: 0,
      author: 'nico',
      judul: 'Pencurian Dompet Nico',
      deskripsi: 'Pencurian dompet Nico yang terjadi di malam hari.',
      gambar:
        'https://images.tokopedia.net/img/cache/500-square/VqbcmM/2021/2/27/4e182a47-ccdf-4a2a-8fd7-ea36bec24747.jpg',
      tujuan_instansi: 'Pemkot',
      jumlah_like: 10,
      jumlah_dislike: 0,
      date: '2022-2-2 00:00:00',
      komentar: [
        {
          pengguna: 'vincent',
          pesan: 'KOK BISA???',
          jumlah_like: 1,
        },
        {
          pengguna: 'nico',
          pesan: 'AKU YG CURI',
          jumlah_like: 5,
        },
      ],
    },
    {
      id: 1,
      author: 'vincent',
      judul: 'Kecelakaan Lalu Lintas',
      deskripsi: 'Kecelakaan mobil di persimpangan utama.',
      gambar:
        'https://img.harianjogja.com/posts/2023/08/15/1145217/kecelakaan-sepeda-motor.jpg',
      tujuan_instansi: 'Polisi Kota',
      jumlah_like: 10,
      jumlah_dislike: 0,
      date: '2022-2-2 00:00:00',
      komentar: [
        {
          pengguna: 'vincent',
          pesan: 'Apakah ada korban?',
          jumlah_like: 1,
        },
        {
          pengguna: 'nico',
          pesan: 'Mobil apa yang menabrak?',
          jumlah_like: 5,
        },
      ],
    },
    {
      id: 2,
      author: 'steven',
      judul: 'Pencurian di Toko Serba Ada',
      deskripsi: 'Sebuah toko disatroni oleh pencuri.',
      gambar:
        'https://png.pngtree.com/png-clipart/20220306/original/pngtree-thief-who-stole-gold-coins-png-image_7416451.png',
      tujuan_instansi: 'Kepolisian Sektor',
      jumlah_like: 10,
      jumlah_dislike: 0,
      date: '2022-2-2 00:00:00',
      komentar: [
        {
          pengguna: 'vincent',
          pesan: 'Barang apa yang dicuri?',
          jumlah_like: 1,
        },
        {
          pengguna: 'nico',
          pesan: 'Apakah pencurinya sudah ketangkap?',
          jumlah_like: 5,
        },
      ],
    },
  ];

  addKejadian(
    title: string,
    author: string,
    description: string,
    imageUrl: string,
    targetInstitution: string,
    date: string
  ) {
    const currentDate: Date = new Date();
    const currentYear: number = currentDate.getFullYear();
    const currentMonth: number = currentDate.getMonth() + 1;
    const currentDay: number = currentDate.getDate();
    const currentHour: number = currentDate.getHours();
    const currentMinute: number = currentDate.getMinutes();
    const currentSecond: number = currentDate.getSeconds();

    this.kejadian.push({
      id: this.kejadian.length,
      author: author,
      judul: title,
      deskripsi: description,
      gambar: imageUrl,
      tujuan_instansi: targetInstitution,
      jumlah_like: 0,
      jumlah_dislike: 0,
      date: date,
      komentar: [],
    });
  }

  searchJudul(query: string): any[] {
    return this.kejadian.filter((k) =>
      k.judul.toLowerCase().includes(query.toLowerCase())
    );
  }

  addLike(k_id: any) {
    this.kejadian[k_id].jumlah_like++;
  }
  addDislike(k_id: any) {
    this.kejadian[k_id].jumlah_dislike++;
  }

  addLikeComment(k_id: any, c_index: any) {
    this.kejadian[k_id].komentar[c_index].jumlah_like++;
  }
}
