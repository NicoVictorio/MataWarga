import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SceneserviceService } from '../sceneservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  user: string | null = localStorage.getItem('user');
  scenes: any[] = []

  constructor(private route: ActivatedRoute, private sceneService: SceneserviceService) { }

  ngOnInit() {
    this.scenes = this.sceneService.scenes
  }

  likeScene(index: number) {
    this.sceneService.like(index)
  }
}
