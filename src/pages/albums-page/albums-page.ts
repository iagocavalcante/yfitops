import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Webservice } from '../../providers/webservice';
import { MusicsPage } from '../musics-page/musics-page';

/**
 * Generated class for the AlbumsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-albums-page',
  templateUrl: 'albums-page.html',
})
export class AlbumsPage {
  albuns: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public webservice:Webservice) {
    webservice.listarAlbums().subscribe(
      data => {
          this.albuns = data;
      },
      err => {
          alert("Ocorreu um erro ao listar os albums: " + JSON.stringify(err));
      });
  }

  getMusicas(albumId): void {
    this.webservice.selectAlbum(albumId);
    this.navCtrl.push(MusicsPage);
  }

}
