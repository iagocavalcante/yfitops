import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Webservice } from '../../providers/webservice';
import { AlbumsPage } from '../albums-page/albums-page'

/**
 * Generated class for the BandasPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-bandas-page',
  templateUrl: 'bandas-page.html',
})
export class BandasPage {
  bandas : any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public webservice:Webservice) {
    webservice.listarBandas().subscribe(
      data => {
          this.bandas = data;
      },
      err => {
          alert("Ocorreu um erro ao listar as bandas: " + JSON.stringify(err));
      });
  }

  getAlbums(bandaId): void {
    this.webservice.selectBanda(bandaId);
    this.navCtrl.push(AlbumsPage);
  }

}


