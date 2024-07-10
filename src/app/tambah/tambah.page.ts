import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { KejadianserviceService } from '../kejadianservice.service';
import { UserserviceService } from '../userservice.service';
// import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

@Component({
  selector: 'app-tambah',
  templateUrl: './tambah.page.html',
  styleUrls: ['./tambah.page.scss'],
})
export class TambahPage {
  constructor(
    private kejadianService: KejadianserviceService,
    private router: Router,
    private toastController: ToastController,
    private userService: UserserviceService
  ) {}

  ngOnInit() {
    // this.new_author = this.userService.userLogin.username;
  }

  new_judul = '';
  new_deskripsi = '';
  new_gambar = '';
  new_tujuan_instansi = '';
  new_author = '';

  base64: any;
  imageType: String = 'URL';

  submitIncident() {
    // if (this.imageType == 'Camera') {
    //   this.new_url = this.foodservice.link + 'images/' + this.new_name + '.png';
    //   this.foodservice
    //     .uploadImage(this.new_name, this.base64)
    //     .subscribe((response: any) => {
    //       if (response.result === 'success') {
    //         alert('photo uploaded');
    //       }
    //     });
    // }
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
