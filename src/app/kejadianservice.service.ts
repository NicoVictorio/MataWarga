import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class KejadianserviceService {
  constructor(private http: HttpClient) { }

  kejadiansList(): Observable<any> {
    return this.http.get('https://ubaya.me/hybrid/160421029/uas_kejadians.php');
  }

  kejadianDetail(id: number): Observable<any> {
    return this.http.get("https://ubaya.me/hybrid/160421029/uas_detail_kejadian.php?id=" + id);
  }

  kejadiansSearch(judul: string): Observable<any> {
    return this.http.get(
      'https://ubaya.me/hybrid/160421029/uas_search.php?judul=' + judul
    );
  }

  addKejadians(
    p_author: string,
    p_judul: string,
    p_deskripsi: string,
    p_gambar: string,
    p_tujuan_instansi: string
  ) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
    });
    const body = new URLSearchParams();
    body.set('author', p_author);
    body.set('judul', p_judul);
    body.set('deskripsi', p_deskripsi);
    body.set('gambar', p_gambar);
    body.set('tujuan_instansi', p_tujuan_instansi);
    const urlEncodedData = body.toString();
    return this.http.post(
      'https://ubaya.me/hybrid/160421029/uas_new_kejadian.php',
      urlEncodedData,
      { headers }
    );
  }

  addLike(k_id: number) {
    return this.http.get(
      'https://ubaya.me/hybrid/160421029/uas_like_kejadian.php?id=' + k_id
    );
  }

  addDislike(k_id: any) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
    });
    const body = new URLSearchParams();
    body.set('kejadian_id', k_id);
    const urlEncodedData = body.toString();
    return this.http.post(
      'https://ubaya.me/hybrid/160421029/uas_dislike_kejadian.php',
      urlEncodedData,
      { headers }
    );
  }

  addLikeComment(k_id: any, c_index: any) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
    });
    const body = new URLSearchParams();
    body.set('kejadian_id', k_id);
    const urlEncodedData = body.toString();
    return this.http.post(
      'https://ubaya.me/hybrid/160421029/uas_like_comment_kejadian.php',
      urlEncodedData,
      { headers }
    );

  }
}
