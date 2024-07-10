import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { KejadianserviceService } from '../kejadianservice.service';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-tambah',
  templateUrl: './tambah.page.html',
  styleUrls: ['./tambah.page.scss'],
})
export class TambahPage {
  constructor(
    private kejadianService: KejadianserviceService,
    private toastController: ToastController
  ) {}

  ngOnInit() {
    this.new_author = localStorage.getItem('app_username') || '';
  }

  new_judul = '';
  new_deskripsi = '';
  new_gambar = '';
  new_tujuan_instansi = '';
  new_author = '';

  base64: any;
  imageType: String = 'URL';

  submitIncident() {
    this.kejadianService
      .addKejadians(
        this.new_author,
        this.new_judul,
        this.new_deskripsi,
        this.new_gambar,
        this.new_tujuan_instansi
      )
      .subscribe((response: any) => {
        if (response.result === 'success') {
          alert('success');
        } else {
          alert(response.message);
        }
      });
  }

  async presentToast(msg: string) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 1500,
      position: 'bottom',
    });
    await toast.present();
  }
}
