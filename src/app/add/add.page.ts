import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SceneserviceService } from '../sceneservice.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {
  user: string | null = localStorage.getItem('user');
  judul = ""
  deskripsi = ""
  instansi = ""

  constructor(private route: ActivatedRoute, private sceneService: SceneserviceService) { }

  ngOnInit() { }

  saveScene(){
    alert(this.user)
  }
}
