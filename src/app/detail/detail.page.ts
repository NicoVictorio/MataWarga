import { Component, OnInit } from '@angular/core';
import { KejadianserviceService } from '../kejadianservice.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  index = 0
  kejadian: any = {}

  constructor(private route: ActivatedRoute, private kejadianservice: KejadianserviceService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.index = params['index']
      this.kejadianservice.kejadianDetail(params['index']).subscribe(
        (data) => {
          this.kejadian = data;
        }
      );
    });
  }

  like() {
    this.kejadianservice.addLike(this.kejadian.id).subscribe(
      (response: any) => {
        if (response.result === 'success') {
          window.location.reload();
        }
        else {
          alert(response.message)
        }
      });
  }
  dislike() {
    this.kejadianservice.addDislike(this.kejadian.id).subscribe(
      (response: any) => {
        if (response.result === 'success') {
          window.location.reload();
        }
        else {
          alert(response.message)
        }
      });
  }

  likeComment(i: number) {
    this.kejadianservice.addLikeComment(this.kejadian.id, i);
  }

}
