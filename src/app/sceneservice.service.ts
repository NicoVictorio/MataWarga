import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SceneserviceService {
  currentDate = new Date();

  scenes = [
    {
      author: "Nico",
      title: "Pencurian Dompet Nico",
      description: "Pencurian dompet Nico yang terjadi di malam hari.",
      photo_url: "https://images.tokopedia.net/img/cache/500-square/VqbcmM/2021/2/27/4e182a47-ccdf-4a2a-8fd7-ea36bec24747.jpg",
      instance: "Pemkot",
      likes: 5,
      dislikes: 3,
      comments: [
        {
          username: "user1",
          comment: "KOK BISA???",
        },
        {
          username: "user2",
          comment: "AKU YG CURI",
        },
        {
          username: "user3",
          comment: "HAHAHA, mampus",
        },
      ],
      date: ""
    },
    {
      author: "Nico",
      title: "Kecelakaan Lalu Lintas",
      description: "Kecelakaan mobil di persimpangan utama.",
      photo_url: "https://img.harianjogja.com/posts/2023/08/15/1145217/kecelakaan-sepeda-motor.jpg",
      instance: "Polisi Kota",
      likes: 10,
      dislikes: 2,
      comments: [
        {
          username: "user1",
          comment: "KOK BISA???",
        },
        {
          username: "user2",
          comment: "AKU YG CURI",
        },
        {
          username: "user3",
          comment: "HAHAHA, mampus",
        },
      ],
      date: ""
    },
    {
      author: "Vincent",
      title: "Kebakaran Rumah di Jalan Merdeka",
      description: "Kebakaran terjadi di sebuah rumah tinggal.",
      photo_url: "https://img.lovepik.com/png/20231117/cartoon-house-on-fire-vector-clipart-fire-cartoons-sticker_617923_wh860.png",
      instance: "Dinas Pemadam Kebakaran",
      likes: 8,
      dislikes: 1,
      comments: [
        {
          username: "user1",
          comment: "KOK BISA???",
        },
        {
          username: "user2",
          comment: "AKU YG CURI",
        },
        {
          username: "user3",
          comment: "HAHAHA, mampus",
        },
      ],
      date: ""
    },
    {
      author: "Vincent",
      title: "Pencurian di Toko Serba Ada",
      description: "Sebuah toko disatroni oleh pencuri.",
      photo_url: "https://png.pngtree.com/png-clipart/20220306/original/pngtree-thief-who-stole-gold-coins-png-image_7416451.png",
      instance: "Kepolisian Sektor",
      likes: 6,
      dislikes: 4,
      comments: [
        {
          username: "user1",
          comment: "KOK BISA???",
        },
        {
          username: "user2",
          comment: "AKU YG CURI",
        },
        {
          username: "user3",
          comment: "HAHAHA, mampus",
        },
      ],
      date: ""
    },
    {
      author: "Vincent",
      title: "Demonstrasi Mahasiswa",
      description: "Demonstrasi mahasiswa menuntut kenaikan beasiswa.",
      photo_url: "https://rakyatsulsel.fajar.co.id/wp-content/uploads/2022/09/Tolak-Kenaikan-Harga-BBM-copy-scaled.jpg",
      instance: "Perguruan Tinggi Negeri",
      likes: 12,
      dislikes: 3,
      comments: [
        {
          username: "user1",
          comment: "KOK BISA???",
        },
        {
          username: "user2",
          comment: "AKU YG CURI",
        },
        {
          username: "user3",
          comment: "HAHAHA, mampus",
        },
      ],
      date: ""
    }
  ];

  constructor() { }

  addScene(p_author: string, p_title: string, p_description: string, p_photo_url: string, p_instance: string) {
    this.scenes.push({
      author: p_author,
      title: p_title,
      description: p_description,
      photo_url: p_photo_url,
      instance: p_instance,
      likes: 0,
      dislikes: 0,
      comments: [],
      date: this.today_ind()
    })
  }

  today_ind(): string {
    const day = this.currentDate.getDay()
    const d = this.currentDate.getDate()
    const m = this.currentDate.getMonth()
    const y = this.currentDate.getFullYear()

    const hari = [
      "Minggu", "Senin", "Selasa", "Rabu",
      "Kamis", "Jumat", "Sabtu",
    ];
    const months = [
      "Januari", "Februari", "Maret", "April", "Mei", "Juni",
      "Juli", "Agustus", "September", "Oktober", "November", "Desember"
    ];

    return hari[day] + ', ' + d + ' ' + months[m] + ' ' + y;
  }

  like(index: number) {
    this.scenes[index].likes++;
  }
}
