import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SceneserviceService } from '../sceneservice.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  scenes: any[] = []
  index = 0

  constructor(private route: ActivatedRoute, private sceneService: SceneserviceService) { }

  ngOnInit() {
    this.scenes = this.sceneService.scenes

    this.route.params.subscribe(params => {
      this.index = params['index'];
    });
  }

}
