import { Component } from '@angular/core';
import { UserserviceService } from '../userservice.service';
import { Router } from '@angular/router';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {
  new_username = ""
  new_password = ""
  new_fullname = ""
  new_url = ""

  base64: any
  imageType: string = "URL"

  constructor(private userService: UserserviceService, private router: Router) { }

  async captureImage() {
    const image = await Camera.getPhoto({
      quality: 50,
      resultType: CameraResultType.Base64,
      source: CameraSource.Camera
    });
    const base64Image = 'data:image/png;base64,' + image.base64String;
    this.base64 = base64Image;
  }

  register() {
    if (this.imageType == 'Camera') {
      this.new_url = "https://ubaya.me/hybrid/160421029/uas_images/" + this.new_username + ".png"
    }

    this.userService.register(this.new_username, this.new_password, this.new_fullname,
      this.new_url, this.base64).subscribe((response: any) => {
        if (response.result === 'success') {
          alert("success")
        }
        else {
          alert(response.message)
        }
      });
    this.new_username = ""
    this.new_password = ""
    this.new_fullname = ""
    this.new_url = ""
    this.router.navigate(['/login']);
  }
}
